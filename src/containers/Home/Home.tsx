import * as S from "./Home.style";
import { Canvas } from "@react-three/fiber";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ThreeContext from "./context/ThreeContext";
import Header from "./components/Header";
import MediaContext, { ValidDevice } from "./context/MediaContext";
import { defaultHeadProps, Head } from "general/Head/Head";
import { useProgress } from "@react-three/drei";

const ToyShopModel = lazy(() => import("./components/ToyShop"));

export type CameraSetting = {
  [device in ValidDevice]: { x: number; y: number; z: number };
};

export const DEFAULT_CAMERA_POSITION_BY_DEVICE: CameraSetting = {
  phone: { x: 24, y: 6.9, z: 46 },
  desktop: { x: 16.5, y: 6, z: 30 },
};

export const DEFAULT_CAMERA_ROTATION_BY_DEVICE: CameraSetting = {
  phone: { x: -0.03, y: 0.5, z: 0.01 },
  desktop: { x: -0.03, y: 0.5, z: 0.01 },
};

export const INITIAL_CAMERA_POSITION_BY_DEVICE: CameraSetting = {
  phone: { x: 3.86, y: 3.66, z: 3.5 },
  desktop: { x: 3.86, y: 3.66, z: 2.5 },
};

export const INITIAL_CAMERA_ROTATION_BY_DEVICE: CameraSetting = {
  phone: { x: 0, y: 0, z: Math.PI * 0.5 },
  desktop: { x: 0, y: 0, z: 0 },
};

const Home = () => {
  const { progress } = useProgress();
  return (
    <>
      <Head {...defaultHeadProps} />

      <MediaContext.Provider>
        <ThreeContext.Provider>
          <S.Wrapper>
            <Suspense fallback={<Loader />}>
              {progress === 100 && <Header />}

              <Canvas shadows camera={{ near: 1, fov: 45, far: 200 }}>
                <color args={["#fffaf1"]} attach="background" />
                <ToyShopModel />
              </Canvas>

              {progress === 100 && (
                <S.Footer>
                  <p>
                    remade a Toy Shop 3D modeling of{" "}
                    <a
                      style={{
                        textDecoration: "underline",
                      }}
                      href="https://www.instagram.com/p/Chw0B-5qzar/?utm_source=ig_web_copy_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @serpico2d.2020
                    </a>
                  </p>
                </S.Footer>
              )}
            </Suspense>
          </S.Wrapper>
        </ThreeContext.Provider>
      </MediaContext.Provider>
    </>
  );
};

export default Home;
