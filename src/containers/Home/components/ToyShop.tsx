import { useGLTF, PresentationControls, Bounds, ScrollControls } from "@react-three/drei";
import ToyScreen from "./ToyScreen";
import CameraController from "../camera/CameraController";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: any;
};

const ToyShop = () => {
  const model = useGLTF("http://localhost:3000/assets/toyshop.glb") as GLTFResult;

  return (
    <>
      {/* <OrbitControls makeDefault onChange={() => {}} /> */}
      <directionalLight castShadow position={[1, 2, 3]} intensity={0.5} shadow-normalBias={0.04} />
      <ambientLight intensity={0.5} />
      <ScrollControls pages={2} damping={3}>
        <PresentationControls global polar={[0, 0]} azimuth={[-0.5, 0.25]}>
          <Bounds>
            <CameraController />

            <group>
              <primitive object={model.scene} />
              <ToyScreen object={model.nodes.screen} />
            </group>

            {/* <mesh geometry={model.nodes.light1.geometry} position={model.nodes.light1.position}>
              <meshBasicMaterial color="#ffffe5" />
            </mesh>
            <mesh geometry={model.nodes.light2.geometry} position={model.nodes.light2.position}>
              <meshBasicMaterial color="#ffffe5" />
            </mesh>
            <mesh geometry={model.nodes.light3.geometry} position={model.nodes.light3.position}>
              <meshBasicMaterial color="#ffffe5" />
            </mesh>
            <mesh geometry={model.nodes.light4.geometry} position={model.nodes.light4.position}>
              <meshBasicMaterial color="#ffffe5" />
            </mesh>
            <mesh geometry={model.nodes.light5.geometry} position={model.nodes.light5.position}>
              <meshBasicMaterial color="#ffffe5" />
            </mesh> */}
          </Bounds>
        </PresentationControls>
      </ScrollControls>
    </>
  );
};

useGLTF.preload("http://localhost:3000/assets/toyshop.glb");

export default ToyShop;
