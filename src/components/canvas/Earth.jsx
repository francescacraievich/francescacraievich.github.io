import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./uranus/planet.glb");

  return (
    <primitive object={earth.scene} scale={1.2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >

 {/* Luce ambientale tenue per illuminazione generale */}
 <ambientLight intensity={2.3} color={"#223344"} />

{/* Luce direzionale con toni freddi e intensità bassa */}
<directionalLight
  position={[5, 10, 5]}
  intensity={3}
  color={"#445566"}
  castShadow
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
/>

{/* Punto luce fredda per dare profondità */}
<pointLight
  position={[-10, 10, -10]}
  intensity={1}
  color={"#334466"}
/>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;