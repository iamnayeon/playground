import { useGLTF, PresentationControls, Bounds, ScrollControls } from "@react-three/drei";
import { Plane } from "@react-three/drei";
import CameraController from "../camera/CameraController";
import { GLTF } from "three-stdlib";
import Balloons from "./model/Balloons";
import Robot from "./model/Robot";
import Floor from "./model/Floor";
import House from "./model/House";

export type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

const ToyShop = () => {
  return (
    <>
      {/* <OrbitControls makeDefault onChange={() => {}} /> */}
      <directionalLight
        intensity={0.6}
        position={[50, 80, 80]}
        castShadow
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-normalBias={0.3}
      />
      <ambientLight intensity={0.5} />

      <ScrollControls pages={2} damping={3}>
        <PresentationControls global polar={[0, 0]} azimuth={[-0.5, 0.25]}>
          <Bounds>
            <CameraController />

            <House />
            <Robot />
            <Balloons />
            <Floor />
          </Bounds>
        </PresentationControls>
      </ScrollControls>
    </>
  );
};

useGLTF.preload("/assets/toyshop.glb");

export default ToyShop;
