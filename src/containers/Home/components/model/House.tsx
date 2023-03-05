import { GLTFResult } from "types/model";
import { useGLTF } from "@react-three/drei";
const House = () => {
  const { nodes, materials } = useGLTF("/assets/toyshop.glb") as GLTFResult;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials.wall}
        position={[0, 0.16, 0]}
      />
      <group position={[6.53, 2.57, -5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials["lego-purple"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067_1.geometry}
          material={materials.redBrick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067_2.geometry}
          material={materials.window}
        />
      </group>
      <group position={[6.53, 2.57, -1.61]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials["lego-yellow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_1.geometry}
          material={materials.redBrick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_2.geometry}
          material={materials.window}
        />
      </group>
      <group position={[2.03, 2.57, 3.13]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={materials["lego-mint"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070_1.geometry}
          material={materials.redBrick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070_2.geometry}
          material={materials.window}
        />
      </group>
      <group position={[-2.15, 11.15, 0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_1.geometry}
          material={materials.redBrick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_2.geometry}
          material={materials.wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_3.geometry}
          material={materials.roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_4.geometry}
          material={materials["O-Cube"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_5.geometry}
          material={materials["T-Cube"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_6.geometry}
          material={materials["Y-Cube"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_7.geometry}
          material={materials["S-Cube"]}
        />
      </group>
      <group position={[1.06, 6.14, 1.85]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials.redBrick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_1.geometry}
          material={materials["lego-mint"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_2.geometry}
          material={materials["lego-pink"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_3.geometry}
          material={materials["lego-yellow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_4.geometry}
          material={materials["lego-purple"]}
        />
      </group>
      <group position={[4.81, 9.14, -3.19]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube101.geometry}
          material={materials.wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube101_1.geometry}
          material={materials.roof}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chimney.geometry}
        material={materials.wall}
        position={[4.81, 9.14, -3.19]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1stFloorRoof"].geometry}
        material={materials.roof}
        position={[-2.15, 4.96, 5.29]}
        rotation={[-0.46, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mainRoof.geometry}
        material={materials.roof}
        position={[4.81, 9.14, -3.19]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balloonPot.geometry}
        material={materials["light-metal"]}
        position={[-7.3, 0.58, 3.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightStand1.geometry}
        material={materials["light-metal"]}
        position={[3.82, 7.94, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightStand5.geometry}
        material={materials["light-metal"]}
        position={[-0.92, 9.91, 0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightStand4.geometry}
        material={materials["light-metal"]}
        position={[-3.77, 9.91, 0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightStand3.geometry}
        material={materials["light-metal"]}
        position={[-1.14, 3.57, 5.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightStand2.geometry}
        material={materials["light-metal"]}
        position={[-3.76, 3.57, 5.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light1.geometry}
        material={materials.light}
        position={[-0.71, 9.52, 0.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light2.geometry}
        material={materials.light}
        position={[4.04, 7.54, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light4.geometry}
        material={materials.light}
        position={[-3.55, 9.52, 0.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light5.geometry}
        material={materials.light}
        position={[-0.92, 3.17, 6.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light3.geometry}
        material={materials.light}
        position={[-3.55, 3.16, 6.04]}
      />
    </group>
  );
};
export default House;
