import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon"; // Hook to create a spherical collision shape

function Box(props: any) {
  const meshRef = useRef() as any; // Reference to the mesh for rotation

  // Random rotation speeds for X, Y, and Z axes
  const [rotationSpeed] = useState({
    x: Math.random() * 0.5, // Random speed for X axis rotation
    y: Math.random() * 0.5, // Random speed for Y axis rotation
    z: Math.random() * 0.5, // Random speed for Z axis rotation
  });

  // Create a physical body for the box using useSphere (can use useBox for a box-shaped object)
  const [ref] = useSphere(() => ({
    mass: 1, // Set the mass (affects how the object interacts with others)
    position: [props.position[0], props.position[1], props.position[2]],
    args: [1], // Size of the sphere (radius)
    friction: 0.5, // Friction coefficient
    restitution: 0.7, // Bounciness (for collisions)
  })) as any;

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_, delta) => {
    if (meshRef.current) {
      // Applying rotation to mesh while respecting physics collision
      meshRef.current.rotation.x += rotationSpeed.x * delta;
      meshRef.current.rotation.y += rotationSpeed.y * delta;
      meshRef.current.rotation.z += rotationSpeed.z * delta;
    }

    // Keep the physics body position synced with mesh
    if (ref.current) {
      ref.current.position.set(
        meshRef.current.position.x,
        meshRef.current.position.y,
        meshRef.current.position.z
      );
    }
  });
  const randomNumber = Math.random();
  // Return view, these are regular three.js elements expressed in JSX
  console.log(props.theme);

  return (
    <mesh ref={meshRef} {...props}>
      {randomNumber < 0.3 ? (
        <octahedronGeometry args={[2 * Math.random()]} />
      ) : randomNumber < 0.6 ? (
        <boxGeometry args={[2 * Math.random()]} />
      ) : (
        <sphereGeometry args={[2 * Math.random(), 5, 5]} />
      )}

      <meshStandardMaterial
        color={props.theme}
        roughness={0.3}
        metalness={0.6}
        wireframe
      />
    </mesh>
  );
}

export default Box;
