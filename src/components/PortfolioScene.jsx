
import { useScroll, Text, Float, MeshDistortMaterial, MeshWobbleMaterial, GradientTexture, Image, Grid } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { technologies, projects } from "../constants";

const MagicDust = ({ count = 50 }) => {
  const mesh = useRef();
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
      const temp = [];
      for(let i=0; i<count; i++) {
           temp.push({ 
               x: -100, y: -100, z: 0, 
               vx: 0, vy: 0, 
               scale: 0
           });
      }
      return temp;
  }, [count]);
  
  const current = useRef(0);
  const prevMouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
      if (!mesh.current) return;

      // Mouse pos
      const x = (state.mouse.x * viewport.width) / 2;
      const y = (state.mouse.y * viewport.height) / 2;
      
      // Calculate distance moved
      const dx = x - prevMouse.current.x;
      const dy = y - prevMouse.current.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      prevMouse.current.x = x;
      prevMouse.current.y = y;

      // Only spawn if moved
      if (dist > 0.05) {
        const i = current.current;
        particles[i].x = x;
        particles[i].y = y;
        particles[i].z = 0;
        // Random spread velocity
        particles[i].vx = (Math.random() - 0.5) * 0.05;
        particles[i].vy = (Math.random() - 0.5) * 0.05;
        particles[i].scale = 1;
        
        // Cycle index
        current.current = (current.current + 1) % count;
      }

      // Update all particles
      particles.forEach((p, index) => {
          p.x += p.vx;
          p.y += p.vy;
          p.scale *= 0.92; // Decay factor
          
          dummy.position.set(p.x, p.y, p.z);
          // Scale down based on age/decay
          const s = p.scale * 0.3; 
          dummy.scale.set(s, s, s);
          dummy.rotation.x += 0.1;
          dummy.rotation.z += 0.1;
          dummy.updateMatrix();
          mesh.current.setMatrixAt(index, dummy.matrix);
      });
      
      mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
      <instancedMesh ref={mesh} args={[null, null, count]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.6} />
      </instancedMesh>
  );
};

const MaterialIcon = ({ position, color }) => {
    return (
        <Float floatIntensity={2} rotationIntensity={2} speed={2}>
            <mesh position={position}>
                <dodecahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
            </mesh>
        </Float>
    )
}

const BackgroundParticles = () => {
    const count = 1500;
    const mesh = useRef();
    const { viewport } = useThree();
    
    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = (Math.random() - 0.5) * 20; // Spread x
            const y = (Math.random() - 0.5) * 40 - 10; // Spread y, centered slightly down
            const z = (Math.random() - 0.5) * 20; // Spread z
            
            temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 });
        }
        return temp;
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        if (!mesh.current) return;
        
        particles.forEach((particle, i) => {
            let { t, factor, speed, x, y, z } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);
            
            // Move particles slightly
            particle.mx += (state.mouse.x * 0.5 - particle.mx) * 0.01;
            particle.my += (state.mouse.y * 0.5 - particle.my) * 0.01;
            
            dummy.position.set(
              (particle.x + particle.mx) + a, 
              (particle.y + particle.my) + b, 
              z + s
            );
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.05, 0]} />
            <meshPhongMaterial color="#00ffff" />
        </instancedMesh>
    );
};

const Rig = ({ children }) => {
  const group = useRef();
  useFrame((state) => {
    // Smoothly rotate the group based on mouse position
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.pointer.x * Math.PI) / 20, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.pointer.y * Math.PI) / 20, 0.05);
  });
  return <group ref={group}>{children}</group>;
};

const PortfolioScene = () => {
  const { width, height } = useThree((state) => state.viewport);
  const scroll = useScroll();
  const group = useRef();

  useFrame((state, delta) => {
    // Smooth camera movement based on scroll
    // scroll.offset is 0 to 1
    // We want to move the camera down or the group up.
    // Let's move the group up to simulate camera moving down.
    const scrollOffset = scroll.offset;
    const totalHeight = height * 5; // 5 pages
    
    // Interpolate group position
    // Creates a parallax or "elevator" effect
    // We want page 0 at y=0, page 1 at y = height, etc.
    // But since we are moving the GROUP up, we move it +height per page scroll.
    
    // Actually simpler: Camera at fixed Z position, looking at 0,0,0
    // We move the group.
    // targetY = scrollOffset * totalHeight (approx)
    
    // Let's use damp for smooth scrolling
    // r1: current range, r2: target range
    // damp(current, target, smooth, time)
    // But simple linear interpolation is fine if ScrollControls has damping.
    
    // Let's stick to moving the camera? No, moving the group is easier for static lights.
    
    // Wait, ScrollControls already handles the scroll "damping" effectively on the scroll offset.
    const targetY = scroll.offset * height * 4.6; // Multiplier adjusted for spacing
    
    // Smoothly interpolate current group y to target y
    // group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.1); 
    // Actually useScroll gives smoothed offset if damping is set on ScrollControls.
    
    if (group.current) {
        group.current.position.y = scroll.offset * height * 5; 
    }
  });

  return (
    <>
      <MagicDust />
      <BackgroundParticles />
      <Rig>
        <group ref={group}>
        
        {/* HERO SECTION / Page 1 (starts at y=0, but moves up as we scroll, so this is at bottom of stack? No top of stack) 
            Wait, if we scroll DOWN (offset 0 -> 1), we want to see lower content.
            The camera is fixed.
            To see lower content, the content must move UP.
            So y position of content should be positive for lower sections?
            No.
            Camera at 0,0,5.
            Hero at 0,0,0.
            About at 0, -height, 0.
            If group moves +y, then Hero moves UP (out of view), About moves UP (into view).
            Yes.
        */}

        {/* HERO */}
        <group position={[0, -0.5, 0]}>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh position={[2, 0, -2]} rotation={[0, 0.5, 0]}>
                <icosahedronGeometry args={[1.5, 1]} />
                <meshStandardMaterial color="#00ffff" wireframe />
            </mesh>
          </Float>
           <Float speed={3} rotationIntensity={1} floatIntensity={1}>
             <mesh position={[-2, -2, -3]} scale={0.5}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <MeshDistortMaterial color="#915eff" attach="material" distort={0.6} speed={2} />
            </mesh>
           </Float>
        </group>

        {/* ABOUT */}
        <group position={[0, -height, 0]}>
           <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <group position={[-2.5, 1, 0]}>
                {/* Cluster of nodes */}
                 <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color="#ff0080" />
                 </mesh>
                 <mesh position={[0.8, 0.5, 0]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#00ffff" />
                 </mesh>
                  <mesh position={[-0.6, 0.6, 0.5]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#915eff" />
                 </mesh>
            </group>
           </Float>
           <mesh position={[2.5, -1, -2]}>
               <octahedronGeometry args={[1.5]} />
               <meshStandardMaterial color="#00ffff" roughness={0.1} metalness={0.5} wireframe />
           </mesh>
        </group>

        {/* EXPERIENCE */}
        <group position={[0, -height * 2, 0]}>
           {/* Floating platforms for experience */}
            <mesh position={[-3, 1, -1]} rotation={[0, Math.PI / 4, 0]}>
                <cylinderGeometry args={[1, 1, 0.2, 32]} />
                <meshStandardMaterial color="orange" />
            </mesh>
             <mesh position={[3, -1, -1]} rotation={[0, -Math.PI / 4, 0]}>
                <cylinderGeometry args={[1, 1, 0.2, 32]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </group>

        {/* PROJECTS */}
        <group position={[0, -height * 3, 0]}>
             <Float speed={4} rotationIntensity={2}>
                <mesh position={[0, 2, -2]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <MeshDistortMaterial color="#00ff00" speed={5} distort={0.6} />
                </mesh>
             </Float>
             {/* Projects are now rendered in HTML Overlay (Interface.jsx) */}
        </group>
        
        {/* SKILLS / CONTACT */}
        <group position={[0, -height * 4, 0]}>
             <group position={[0,0,0]}>
                 {technologies.map((tech, i) => {
                     const x = (i % 4) * 2 - 3;
                     const y = Math.floor(i / 4) * 2 - 1;
                     return <MaterialIcon key={tech.name} position={[x, y, 0]} color={i % 2 === 0 ? "cyan" : "magenta"} />
                 })}
             </group>
        </group>
      </group>
      </Rig>
    </>
  );
};

export default PortfolioScene;
