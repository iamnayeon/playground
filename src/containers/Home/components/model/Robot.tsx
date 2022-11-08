import { GLTFResult } from "../ToyShop";
import { useGLTF } from "@react-three/drei";
import ToyScreen from "../ToyScreen";
const Robot = () => {
  const { nodes, materials } = useGLTF("/assets/toyshop.glb") as GLTFResult;

  return (
    <>
      <group position={nodes.robot.position}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["robot-purple"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["robot-orange"]}
        />
      </group>
      <ToyScreen />
    </>
  );
};
export default Robot;
