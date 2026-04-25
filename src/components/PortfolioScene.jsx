import { useScroll, Sphere, Torus, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const OrbitRing = ({ radius, speed, planetSize, planetColor, offsetAngle = 0 }) => {
    const planetRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offsetAngle;
        if (planetRef.current) {
            planetRef.current.position.x = Math.cos(t) * radius;
            planetRef.current.position.z = Math.sin(t) * radius;
            planetRef.current.rotation.y += 0.05;
            planetRef.current.rotation.x += 0.05;
        }
    });

    return (
        <group>
            {/* The Orbit Ring */}
            <Torus args={[radius, 0.01, 64, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
            </Torus>
            
            {/* The Planet */}
            <mesh ref={planetRef} position={[radius, 0, 0]}>
                <sphereGeometry args={[planetSize, 32, 32]} />
                <meshStandardMaterial 
                    color={planetColor} 
                    emissive={planetColor}
                    emissiveIntensity={0.5}
                    roughness={0.2} 
                    metalness={0.8} 
                />
                <pointLight color={planetColor} intensity={2} distance={radius * 2} />
            </mesh>
        </group>
    );
};

const SolarSystem = () => {
    return (
        <group rotation={[0.4, 0, 0]} position={[0, -1, -5]}>
            <OrbitRing radius={2.5} speed={0.3} planetSize={0.08} planetColor="#ffffff" offsetAngle={0} />
            <OrbitRing radius={4} speed={0.2} planetSize={0.15} planetColor="#00ffff" offsetAngle={Math.PI / 3} />
            <OrbitRing radius={6} speed={0.15} planetSize={0.2} planetColor="#915eff" offsetAngle={Math.PI} />
            <OrbitRing radius={8} speed={0.1} planetSize={0.25} planetColor="#ff0080" offsetAngle={Math.PI / 2} />
            <OrbitRing radius={11} speed={0.08} planetSize={0.35} planetColor="#00ff88" offsetAngle={Math.PI * 1.5} />
            <OrbitRing radius={14} speed={0.05} planetSize={0.4} planetColor="#ffaa00" offsetAngle={2} />
            
            {/* Center Core */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial 
                        color="#ffffff" 
                        emissive="#ffffff" 
                        emissiveIntensity={1} 
                        roughness={0} 
                        metalness={1} 
                    />
                    <pointLight color="#ffffff" intensity={5} distance={30} />
                </mesh>
            </Float>
        </group>
    );
};

const Rig = ({ children }) => {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 8, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 8, 0.05);
  });
  return <group ref={group}>{children}</group>;
};

const PortfolioScene = () => {
  const scroll = useScroll();
  const group = useRef();

  useFrame(() => {
    // Parallax effect on scroll - move system slightly up and rotate slowly to show depth
    if (group.current) {
        group.current.position.y = scroll.offset * 12;
        group.current.rotation.y = scroll.offset * Math.PI / 2;
    }
  });

  return (
    <>
      <Rig>
        <group ref={group}>
            <SolarSystem />
        </group>
      </Rig>
    </>
  );
};

export default PortfolioScene;
