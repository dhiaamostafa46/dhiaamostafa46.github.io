'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

const PacketStream = ({ start, end, speed = 0.5, color = '#22d3ee' }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a bezier curve between the central core and the orbital node
  const curve = useMemo(() => {
    const p0 = new THREE.Vector3(start[0], start[1], start[2]);
    const p3 = new THREE.Vector3(end[0], end[1], end[2]);
    const p1 = new THREE.Vector3(start[0], start[1] + 1.5, start[2]);
    const p2 = new THREE.Vector3(end[0], end[1] + 1.5, end[2]);
    return new THREE.QuadraticBezierCurve3(p0, p1, p3);
  }, [start, end]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = (state.clock.getElapsedTime() * speed) % 1;
    const pos = curve.getPointAt(t);
    meshRef.current.position.copy(pos);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.08, 0.08, 0.08]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const NodePlanet = ({ position, label, onClick, isHovered, onHover, onUnhover }: any) => {
  return (
    <group position={position}>
      {/* Node Sphere */}
      <mesh 
        onClick={onClick}
        onPointerOver={onHover}
        onPointerOut={onUnhover}
      >
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color={isHovered ? '#6366f1' : '#22d3ee'} wireframe />
      </mesh>
      
      {/* Halo Light */}
      <pointLight color={isHovered ? '#6366f1' : '#22d3ee'} intensity={isHovered ? 2.5 : 1} distance={3} />
      
      {/* Connection line back to core */}
      <line>
        <bufferGeometry attach="geometry">
          <float32BufferAttribute
            attach="attributes-position"
            args={[new Float32Array([0, 0, 0, -position[0], -position[1], -position[2]]), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#6366f1" transparent opacity={0.15} />
      </line>
    </group>
  );
};

const CoreEngine = ({ onSelectNode }: { onSelectNode: (label: string) => void }) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const nodes = useMemo(() => [
    { pos: [2.5, 0.5, 1.5] as [number, number, number], label: "ERP" },
    { pos: [-2.2, -0.8, 1.8] as [number, number, number], label: "SaaS" },
    { pos: [1.2, 2.2, -1.0] as [number, number, number], label: "APIs" },
    { pos: [-1.8, 1.8, -1.5] as [number, number, number], label: "DB" },
    { pos: [0.2, -2.4, 1.0] as [number, number, number], label: "AI" },
    { pos: [-0.5, -2.0, -2.0] as [number, number, number], label: "Fleet" },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.12;
      coreRef.current.rotation.x = Math.sin(time * 0.08) * 0.1;
    }
  });

  return (
    <group>
      {/* Central Core Sphere representing the operational system engine */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.5} />
      </mesh>
      <pointLight color="#6366f1" intensity={3.5} distance={12} />

      {/* Orbiting nodes with dynamic data streams */}
      {nodes.map((node, idx) => (
        <group key={idx}>
          <NodePlanet
            position={node.pos}
            label={node.label}
            onClick={() => onSelectNode(node.label)}
            isHovered={hoveredNode === idx}
            onHover={() => setHoveredNode(idx)}
            onUnhover={() => setHoveredNode(null)}
          />
          {/* Data flowing along the connection path */}
          <PacketStream start={[0, 0, 0]} end={node.pos} speed={0.4 + idx * 0.08} color={hoveredNode === idx ? '#8b5cf6' : '#22d3ee'} />
        </group>
      ))}
    </group>
  );
};

export default function HeroSystemCore({ onSelectNode }: { onSelectNode: (label: string) => void }) {
  return (
    <div className="w-full h-full min-h-[450px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 55 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.15} />
        <CoreEngine onSelectNode={onSelectNode} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
