import { GLTFResult } from "../ToyShop";
import { useGLTF } from "@react-three/drei";
const Floor = () => {
  const model = useGLTF("/assets/toyshop.glb") as GLTFResult;
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.floor.geometry}
        material={model.nodes.floor.material}
        position={model.nodes.floor.position}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} scale={1000}>
        <planeGeometry />
        <shadowMaterial opacity={0.1} />
      </mesh>
    </>
  );
};
export default Floor;
