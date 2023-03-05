import { MeshRefractionMaterial, useGLTF, CubeCamera } from "@react-three/drei";
import { RGBELoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";

const MESH_REFRACTION_MAT_CONFIG = {
  bounces: 4,
  aberrationStrength: 0.01,
  ior: 2.4,
  fresnel: 0.04,
  color: "white",
  fastChroma: true,
};

const RingModel = ({ meshesMap }: any) => {
  const gltf = useGLTF("/assets/ring.glb");
  const diamondMeshList = useMemo(
    () => Object.keys(gltf.nodes).filter((n) => n.includes("Diamond")),
    [gltf]
  );

  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  const diamondRef = useRef();
  const ringRef = useRef();

  meshesMap.current = {
    diamond: diamondRef.current,
    ring: ringRef.current,
  };

  const three = useThree();

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {/* @ts-ignore */}
      {(texture) => (
        <group scale={0.1}>
          {diamondMeshList.map((m) => {
            return (
              <mesh
                key={m}
                castShadow
                //@ts-ignore
                ref={(e) => {
                  //@ts-ignore
                  if (m === "Diamond-Placeholder-big") diamondRef.current = e;
                }}
                scale={gltf.nodes[m].scale}
                position={gltf.nodes[m].position}
                quaternion={gltf.nodes[m].quaternion}
                //@ts-ignore
                geometry={gltf.nodes[m].geometry}
              >
                <MeshRefractionMaterial
                  envMap={texture}
                  {...MESH_REFRACTION_MAT_CONFIG}
                  toneMapped={false}
                />
              </mesh>
            );
          })}

          <mesh
            castShadow
            //@ts-ignore
            ref={ringRef}
            position={gltf.nodes["Ring"].position}
            //@ts-ignore
            material={gltf.nodes["Ring"].material}
            //@ts-ignore
            geometry={gltf.nodes["Ring"].geometry}
          />
        </group>
      )}
    </CubeCamera>
  );
};
export default RingModel;
