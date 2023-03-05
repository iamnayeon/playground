import * as S from "./JewelryCustomiser.style";
import { useRef, lazy } from "react";

import * as THREE from "three";
import HTMLSection from "./HTMLSection/HTMLSection";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";

import { RandomizedLight, Environment } from "@react-three/drei";

const RingModel = lazy(() => import("./components/RingModel"));

const JewelryCustomiser = () => {
  // const [progressValue, setProgressValue] = useState<number>(0);

  const meshesMap = useRef({
    diamond: null,
    ring: null,
  });

  //const isLoaded = useMemo(() => progressValue === 1, [progressValue]);

  const controlRef = useRef();

  return (
    <S.Wrapper>
      <Canvas
        shadows
        camera={{
          near: 1,
          fov: 45,
          far: 200,
        }}
        gl={{ toneMapping: THREE.NoToneMapping }}
      >
        <color attach="background" args={[new THREE.Color("#e6bfbe")]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <ScrollControls pages={2}>
          {/* <PivotControls>
            <mesh castShadow receiveShadow position={[-1, 0.5, 1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial />
            </mesh>
          </PivotControls> */}
          <RingModel meshesMap={meshesMap} />
          {/* @ts-ignore */}
          <Scroll html style={{ width: "100vw", height: "100vh" }}>
            <HTMLSection meshesMap={meshesMap} />
          </Scroll>
        </ScrollControls>

        {/* @ts-ignore */}
        <OrbitControls enabled={false} ref={controlRef} makeDefault />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[5, 5, -10]}
          bias={0.001}
        />
      </Canvas>
    </S.Wrapper>
  );
};

export default JewelryCustomiser;
