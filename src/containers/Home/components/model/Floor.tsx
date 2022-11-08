import { GLTFResult } from "../ToyShop";
import { useGLTF } from "@react-three/drei";
const Floor = () => {
  const model = useGLTF("/assets/toyshop.glb") as GLTFResult;
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={model.nodes.floor.geometry}
      material={model.nodes.floor.material}
      position={model.nodes.floor.position}
    />
  );
};
export default Floor;
