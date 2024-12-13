import { FC } from "react";
import "./footerDivider.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FooterDivider: FC<{ text: string }> = ({ text }) => {
  useGSAP(() => {
    gsap.from(".footer-divider-top", {
      scrollTrigger: {
        trigger: ".footer-divider-svg",
        start: "top 80%",
        end: "350% 80%",
        scrub: true,
      },
      x: "-100%",
      ease: "none",
    });
    gsap.from(".footer-divider-bottom", {
      scrollTrigger: {
        trigger: ".footer-divider-svg",
        start: "top 80%",
        end: "350% 80%",
        scrub: true,
      },
      x: "40%",
      ease: "none",
    });
    gsap.from(".footer-divider-mid", {
      scrollTrigger: {
        trigger: ".footer-divider-svg",
        start: "top 80%",
        end: "350% 80%",
        scrub: true,
      },
      x: "70%",
      ease: "none",
    });
  });
  return (
    <div className="footer-divider-wrapper">
      <h4 className="footer-divider-text">
        <em>{text}</em>
      </h4>
      <svg
        width="1920"
        height="153"
        viewBox="0 0 1920 153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer-divider-svg"
      >
        <rect
          width="1108"
          height="20"
          fill="currentColor"
          className="footer-divider-top"
        />
        <rect
          x="253"
          y="133"
          width="1760"
          height="20"
          fill="currentColor"
          className="footer-divider-bottom"
        />
        <rect
          x="406"
          y="37"
          width="1108"
          height="79"
          fill="currentColor"
          className="footer-divider-mid"
        />
      </svg>
    </div>
  );
};

export default FooterDivider;
