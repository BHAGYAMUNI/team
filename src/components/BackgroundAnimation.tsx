
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      position: [
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ],
      size: Math.random() * 0.5 + 0.2,
      color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
      speed: Math.random() * 0.02 + 0.01
    }));
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.3;
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      
      // Animate individual particles
      groupRef.current.children.forEach((particle, i) => {
        const p = particles[i];
        particle.position.y += Math.sin(clock.getElapsedTime() * p.speed) * 0.01;
        particle.position.x += Math.cos(clock.getElapsedTime() * p.speed) * 0.01;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[particle.size]} />
          <meshStandardMaterial 
            color={particle.color}
            transparent
            opacity={0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const FloatingElements = () => {
  const shapes = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      type: i % 3 === 0 ? 'box' : i % 3 === 1 ? 'sphere' : 'torus',
      position: [
        Math.random() * 16 - 8,
        Math.random() * 16 - 8,
        Math.random() * 16 - 8
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      size: Math.random() * 0.8 + 0.5,
      color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.6)
    }));
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh 
            position={shape.position as [number, number, number]} 
            rotation={shape.rotation as [number, number, number]}
          >
            {shape.type === 'box' && <boxGeometry args={[shape.size, shape.size, shape.size]} />}
            {shape.type === 'sphere' && <sphereGeometry args={[shape.size, 16, 16]} />}
            {shape.type === 'torus' && <torusGeometry args={[shape.size, shape.size/3, 16, 32]} />}
            <meshPhysicalMaterial 
              color={shape.color} 
              roughness={0.2} 
              metalness={0.8}
              transparent
              opacity={0.7}
              side={THREE.DoubleSide}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#050816']} />
        <fog attach="fog" args={['#050816', 15, 30]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#5c61ff" />
        
        {/* 3D Elements */}
        <AnimatedParticles />
        <FloatingElements />
        
        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;
