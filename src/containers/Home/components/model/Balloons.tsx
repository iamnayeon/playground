import { GLTFResult } from "../ToyShop";
import { Float, useGLTF } from "@react-three/drei";

const Balloons = () => {
  const { nodes, materials } = useGLTF("/assets/toyshop.glb") as GLTFResult;
  return (
    <group>
      <group position={[-7.46, 10.4, 3.3]} rotation={[0.04, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials["balloon-yellow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_1.geometry}
          material={materials["balloon-rubber"]}
        />
      </group>
      <group position={[-7.5, 9.26, 4.56]} rotation={[0.16, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={materials["balloon-red"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_1.geometry}
          material={materials["balloon-rubber"]}
        />
      </group>
      <group position={[-6.39, 9.32, 3.58]} rotation={[0.05, 0, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials["balloon-purple"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_1.geometry}
          material={materials["balloon-rubber"]}
        />
      </group>
      <group position={[-6.93, 6.09, 2.89]} rotation={[0, 0, -0.09]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["balloon-rubber"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials["balloon-green"]}
        />
      </group>
    </group>
  );
};
export default Balloons;
