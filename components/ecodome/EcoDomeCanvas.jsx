"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";

import * as THREE from "three";
import { useMemo, useRef } from "react";

function EcoDomeModel() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  const domeGeometry = useMemo(() => {
    const points = [];

    const radius = 7.5;
    const height = 4.125;

    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const theta = Math.PI * t;

      const x = Math.sin(theta) * radius;
      const y = Math.cos(theta) * height;

      if (y >= 0) {
        points.push(new THREE.Vector2(x, y));
      }
    }

    return new THREE.LatheGeometry(points, 128);
  }, []);

  const holePositions = useMemo(() => {
    const arr = [];

    const count = 16;
    const ringRadius = 5.7;
    const y = 1.2;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;

      arr.push({
        position: [
          Math.cos(angle) * ringRadius,
          y,
          Math.sin(angle) * ringRadius,
        ],
        rotation: [0, angle, Math.PI / 2],
      });
    }

    return arr;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Main Dome */}
      <mesh geometry={domeGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#d8dee9"
          roughness={0.7}
          metalness={0.1}
          clearcoat={0.3}
        />
      </mesh>

      {/* Bottom Flange */}
      <mesh position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[7.5, 8.2, 128]} />
        <meshStandardMaterial color="#bcc6d1" />
      </mesh>

      {/* Entry Holes */}
      {holePositions.map((hole, index) => (
        <mesh
          key={index}
          position={hole.position}
          rotation={hole.rotation}
        >
          <cylinderGeometry args={[0.72, 0.72, 0.25, 32]} />
          <meshStandardMaterial color="#0b1120" />
        </mesh>
      ))}

      {/* Apex Vents */}
      <mesh position={[1.2, 4.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.2, 32]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      <mesh position={[-1.2, 4.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.2, 32]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* GPS Pocket */}
      <mesh position={[0, 4.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.18, 64]} />
        <meshStandardMaterial color="#8d99a6" />
      </mesh>

      {/* Bolt Holes */}
      {[0, 90, 180, 270].map((deg, i) => {
        const rad = THREE.MathUtils.degToRad(deg);

        return (
          <mesh
            key={i}
            position={[
              Math.cos(rad) * 7.85,
              0.1,
              Math.sin(rad) * 7.85,
            ]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.22, 0.22, 0.2, 24]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
        );
      })}
    </group>
  );
}

export default function EcoDomeCanvas() {
  return (
    <div className="relative h-[700px] w-full overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#071019] to-[#02050a]">
      <Canvas
        camera={{ position: [0, 6, 18], fov: 42 }}
        shadows
      >
        <fog attach="fog" args={["#02050a", 18, 40]} />

        <ambientLight intensity={0.7} />

        <directionalLight
          position={[10, 14, 8]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <spotLight
          position={[-12, 10, -8]}
          angle={0.35}
          penumbra={1}
          intensity={1.5}
        />

        <Float
          speed={2}
          rotationIntensity={0.12}
          floatIntensity={0.4}
        >
          <EcoDomeModel />
        </Float>

        <Environment preset="city" />

        <OrbitControls
          enablePan={false}
          minDistance={10}
          maxDistance={24}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
        />

        <ContactShadows
          position={[0, -0.4, 0]}
          opacity={0.45}
          scale={24}
          blur={2.5}
          far={12}
        />
      </Canvas>

      {/* Overlay Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />

      {/* Top Card */}
      <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          Marine Habitat
        </p>

        <h3 className="mt-1 text-lg font-semibold text-white">
          EcoDome V1
        </h3>
      </div>

      {/* Bottom Specs */}
      <div className="absolute bottom-6 right-6 max-w-[240px] rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
        <p className="text-sm leading-relaxed text-neutral-300">
          Engineered flattened hemisphere geometry with reinforced
          HDPE shell structure, benthic entry apertures,
          apex circulation vents, and modular deployment flange.
        </p>
      </div>
    </div>
  );
}
