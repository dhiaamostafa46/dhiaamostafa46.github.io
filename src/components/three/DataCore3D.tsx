'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useGlobalScroll } from './useGlobalScroll'; // We'll create this hook to sync scroll

// 1. The Neural Core (Centerpiece)
const NeuralCore = ({ scrollProgress }: { scrollProgress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      // Slight vertical displacement on scroll for parallax
      const targetY = -scrollProgress * 2;
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Icosahedron for a tech/architectural feel */}
        <icosahedronGeometry args={[1.8, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#0f172a" // Dark base
          background={new THREE.Color("#020202")}
        />
      </mesh>
    </Float>
  );
};

// 2. Data Nodes (Orbiting particles)
const DataNodes = ({ scrollProgress }: { scrollProgress: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Create a spherical distribution
      const r = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
      
      // Parallax on scroll
      const targetY = scrollProgress * 3;
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// 3. Subtle Lighting
const AmbientTechLighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
      <spotLight position={[0, 5, 0]} intensity={2} angle={0.5} penumbra={1} color="#ffffff" />
    </>
  );
};

export default function DataCore3D() {
  const scrollProgress = useGlobalScroll();

  return (
    <>
      <AmbientTechLighting />
      <NeuralCore scrollProgress={scrollProgress} />
      <DataNodes scrollProgress={scrollProgress} />
    </>
  );
}
