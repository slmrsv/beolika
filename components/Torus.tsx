import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader } from '@react-three/drei';

function Model(props: any) {
  return (
    <mesh {...props}>
      <torusGeometry args={ [ 1, 0.6, 16, 32 ] } />
      <meshPhysicalMaterial 
        transparent
        thickness={5}
        roughness={0}
        clearcoat={1}
        clearcoatRoughness={0}
        transmission={0.4}
        ior={1.25}
        envMapIntensity={25}
        color="pink"
        attenuationColor="#ffe79e"
      />
    </mesh>
  );
}

export default function Torus() {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.5] }}>
        <Suspense fallback={null}>
          <Environment files="adams_place_bridge_1k.hdr" />
          <Model />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
