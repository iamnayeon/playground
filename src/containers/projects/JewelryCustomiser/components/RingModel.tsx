import { MeshRefractionMaterial, useGLTF, CubeCamera } from "@react-three/drei";
import { RGBELoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { GLTFResult } from "types/model";
import { Mesh } from "three";

const MESH_REFRACTION_MAT_CONFIG = {
  bounces: 4,
  aberrationStrength: 0.01,
  ior: 2.4,
  fresnel: 0.04,
  color: "white",
  fastChroma: true,
};

const RingModel = ({ meshesMap }: any) => {
  const gltf = useGLTF("/assets/ring.glb") as GLTFResult;
  const diamondMeshList = useMemo(
    () => Object.keys(gltf.nodes).filter((n) => n.includes("Diamond")),
    [gltf]
  );

  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  const diamondRef = useRef<Mesh | null>(null);
  const ringRef = useRef<Mesh | null>(null);

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
          {diamondMeshList.map((m) => (
            <mesh
              key={m}
              castShadow
              ref={(e) => {
                if (m === "Diamond-Placeholder-big") diamondRef.current = e;
              }}
              scale={gltf.nodes[m].scale}
              position={gltf.nodes[m].position}
              quaternion={gltf.nodes[m].quaternion}
              geometry={gltf.nodes[m].geometry}
            >
              <MeshRefractionMaterial
                envMap={texture}
                {...MESH_REFRACTION_MAT_CONFIG}
                toneMapped={false}
              />
            </mesh>
          ))}

          <mesh
            castShadow
            ref={ringRef}
            position={gltf.nodes["Ring"].position}
            material={gltf.nodes["Ring"].material}
            geometry={gltf.nodes["Ring"].geometry}
          />
        </group>
      )}
    </CubeCamera>
  );
};
export default RingModel;
