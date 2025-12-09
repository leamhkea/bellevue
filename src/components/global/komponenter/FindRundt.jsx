"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useState } from "react";

// Liste over interaktive objekters ID'er
const interactiveIds = ["Cube002", "Cube005", "Cube004", "Cube028", "Cube039", "Cube042", "Cube043", "Cube045", "Cube046"]; 

function Model({ onMeshClick, setHoveredId }) {
  const { scene } = useGLTF("/kort/foyer_stueplan.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      // Materialer
      child.material.flatShading = true;
      child.material.transparent = true;
      child.material.opacity = 0.8;
      child.material.depthWrite = false;
      child.material.color.set("#bfbfbf");

      // Gem ID
      child.userData.id = child.name;

      // Cube001 skal ignoreres
      if (child.name === "Cube001") {
        child.raycast = () => {};
      }

      // Hvis objektet ikke er interaktivt, ignorer pointer-events
      if (!interactiveIds.includes(child.name)) {
        child.raycast = () => {};
      }
    }
  });

  return (
    <primitive
      object={scene}
      onPointerDown={(e) => {
        e.stopPropagation();
        const clickedId = e.object.userData.id;
        if (clickedId && interactiveIds.includes(clickedId)) {
          onMeshClick(clickedId);
        }
      }}
    //   onPointerOver={(e) => {
    //     e.stopPropagation();
    //     const id = e.object.userData.id;
    //     if (id && interactiveIds.includes(id)) {
    //       setHoveredId(id);
    //       e.object.material.color.set("#ffcc00"); // Highlight farve
    //     }
    //   }}
    //   onPointerOut={(e) => {
    //     e.stopPropagation();
    //     const id = e.object.userData.id;
    //     if (id && interactiveIds.includes(id)) {
    //       setHoveredId(null);
    //       e.object.material.color.set("#bfbfbf"); // Tilbage til grå
    //     }
    //   }}
    />
  );
}

export default function FindRundt() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="h-screen relative">

      {/* Infoboks */}
      {activeId && (
        <div className="absolute top-10 right-10 p-4 bg-white shadow-lg rounded-xl z-50">
          <h2 className="font-bold mb-2">Du klikkede på:</h2>
          <p>{activeId}</p>
          <button
            className="mt-4 px-4 py-2 bg-black text-white rounded"
            onClick={() => setActiveId(null)}
          >
            Luk
          </button>
        </div>
      )}

      <div className="absolute left-20 h-full w-full">
        <Canvas camera={{ position: [150, 20, 90], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[50, 50, 50]} intensity={10} />
          <directionalLight position={[-50, 50, -50]} intensity={10} />
          <OrbitControls enableZoom={false} />

          <Model
            onMeshClick={(id) => setActiveId(id)}
            setHoveredId={setHoveredId}
          />
        </Canvas>
      </div>
    </section>
  );
}
