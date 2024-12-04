import { FC, useEffect, useRef, useState } from "react";
import "./styles.css";
import { useInView } from "react-intersection-observer";

const PieChart: FC<{ data: ChartData[] }> = ({ data }) => {
  const [inView, setInView] = useState(false);
  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  // When the component is in view, update the state
  if (isInView && !inView) {
    setInView(true);
  }

  const totalSegments = data.length;
  const anglePerSegment = (2 * Math.PI) / totalSegments; // Equal angle for each segment
  const centerX = 350; // SVG center x-coordinate
  const centerY = 350; // SVG center y-coordinate
  const baseRadius = 100; // Base radius of the chart
  const maxRadius = 250; // Maximum radius for the largest value

  // Helper function to calculate SVG arc paths
  const calculateArcPath = (
    startAngle: number,
    endAngle: number,
    outerRadius: number
  ) => {
    const startX = centerX + outerRadius * Math.cos(startAngle);
    const startY = centerY + outerRadius * Math.sin(startAngle);
    const endX = centerX + outerRadius * Math.cos(endAngle);
    const endY = centerY + outerRadius * Math.sin(endAngle);

    return `M ${centerX},${centerY} L ${startX},${startY} A ${outerRadius},${outerRadius} 0 ${
      endAngle - startAngle > Math.PI ? 1 : 0
    } 1 ${endX},${endY} Z`;
  };

  return (
    <svg
      ref={ref} // This ref triggers the inView callback
      width={1000}
      height={1000}
      viewBox="0 0 700 700"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", background: "transparent" }}
      className={inView ? "pie-chart-enter" : ""}
    >
      {data.map((item, index) => {
        const startAngle = index * anglePerSegment;
        const endAngle = startAngle + anglePerSegment;
        const midpointAngle = (startAngle + endAngle) / 2; // Angle at the center of the arc
        const normalizedValue =
          item.value / Math.max(...data.map((d) => d.value));
        const radius = baseRadius + normalizedValue * (maxRadius - baseRadius); // Proportional height

        // Arc midpoint coordinates
        const arcMidX = centerX + radius * Math.cos(midpointAngle);
        const arcMidY = centerY + radius * Math.sin(midpointAngle);

        // Label coordinates (further out)
        const labelRadius = radius + 35; // Add padding to push labels outward
        const labelX = centerX + labelRadius * Math.cos(midpointAngle);
        const labelY = centerY + labelRadius * Math.sin(midpointAngle);

        const arcXEnd = centerX + labelRadius * Math.cos(midpointAngle) * 0.9;
        const arcYEnd = centerY + labelRadius * Math.sin(midpointAngle) * 0.9;

        const path = calculateArcPath(startAngle, endAngle, radius);
        const maxLightness = 100; // Brightest blue
        const minLightness = 10; // Darkest blue
        const lightness =
          minLightness + (1 - normalizedValue) * (maxLightness - minLightness);
        const color = `hsl(246, 100%, ${lightness}%)`;

        // References for text and rect
        const textRef = useRef<SVGTextElement>(null);
        const [bbox, setBbox] = useState<DOMRect | null>(null);

        // Calculate bounding box for background rect
        useEffect(() => {
          if (textRef.current) {
            setBbox(textRef.current.getBBox());
          }
        }, [item.label]);

        return (
          <g key={index}>
            {/* Arc */}
            <path
              d={path}
              fill={color}
              stroke="#ffffff"
              strokeWidth="4"
              className="segment"
            ></path>
            {/* Background Rect for Fancy Tooltip */}
            {bbox && (
              <rect
                x={arcXEnd - bbox.width / 2 - 5} // Padding
                y={arcYEnd - bbox.height / 2 - 5} // Padding
                width={bbox.width + 20} // Padding
                height={bbox.height + 10} // Padding
                fill="rgb(0, 0, 0)" // Semi-transparent black
                rx="5" // Rounded corners
                ry="5"
                opacity="0" // Initially hidden
                style={{
                  pointerEvents: "none", // Prevent interaction with the background
                  transition: "opacity 0.3s ease",
                }}
                className="tooltip-background"
              />
            )}
            {/* Fancy Tooltip-like Title on Hover */}
            <text
              ref={textRef}
              className="pie-segment-title"
              x={arcXEnd + 5}
              y={arcYEnd + 5}
              textAnchor="middle"
              fill="#fff"
              fontSize="12"
              fontWeight="bold"
              opacity="0" // Initially hidden
              style={{
                pointerEvents: "none", // Prevent interaction with the title
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {`(${item.value})`} {item.label}
            </text>

            {/* Line from arc midpoint to label */}
            <line
              x1={arcMidX}
              y1={arcMidY}
              x2={arcXEnd}
              y2={arcYEnd}
              stroke="#fff"
              strokeWidth="1"
            />

            {/* Arc Label */}
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              fill="#fff"
              fontSize="12"
              fontWeight="bold"
              className="label"
            >
              {item.label}
            </text>
          </g>
        );
      })}

      {/* Inner circle with border */}
      <circle
        cx={centerX}
        cy={centerY}
        r={baseRadius - 10}
        fill="#0a0c28"
        stroke="white"
        strokeWidth="40"
      />

      {/* Center Text */}
      <text
        x={centerX}
        y={centerY + 10}
        textAnchor="middle"
        fill="#fff"
        fontSize="48"
        fontWeight="bold"
      >
        {data.length} {/* Number of items */}
      </text>
      <text
        x={centerX}
        y={centerY + 25}
        textAnchor="middle"
        fill="#aaa"
        fontSize="10"
      >
        Technologies
      </text>
    </svg>
  );
};

export type ChartData = {
  label: string;
  value: number;
  color?: string; // Made optional for auto-generated colors
};

export default PieChart;
