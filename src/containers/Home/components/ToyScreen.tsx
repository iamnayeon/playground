import { useRef, useEffect } from "react";
import Me from "./Me";
import * as S from "./ToyScreen.style";
import { GLTFResult } from "./ToyShop";
import { useGLTF, Html } from "@react-three/drei";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";
const ToyScreen = () => {
  const htmlRef = useRef<HTMLDivElement>(null);
  const { nodes } = useGLTF("/assets/toyshop.glb") as GLTFResult;
  const { gl } = useThree();

  useEffect(() => {
    if (htmlRef.current) {
      /**
       * events for fixing problem of disabled scrolling on the html section
       */

      const htmlWrapperByDrei = htmlRef.current.parentElement as HTMLDivElement;
      const mouseMoveHandler = () => {
        htmlWrapperByDrei.style.pointerEvents = "auto";
      };
      const wheelHandler = () => {
        htmlWrapperByDrei.style.pointerEvents = "none";
      };
      htmlWrapperByDrei.addEventListener("mousemove", mouseMoveHandler);
      htmlWrapperByDrei.addEventListener("wheel", wheelHandler);
      return () => {
        htmlWrapperByDrei.removeEventListener("mousemove", mouseMoveHandler);
        htmlWrapperByDrei.removeEventListener("wheel", wheelHandler);
      };
    }
  }, []);

  // const htmlControl = useControls({
  //   distanceFactor: {
  //     value: 0.73,
  //   },
  //   position: { value: { x: 0, y: 0, z: 0.07 } },
  // });

  return (
    <primitive object={nodes.screen}>
      <Html
        ref={htmlRef}
        occlude
        transform
        distanceFactor={0.73}
        position={[0, 0, 0.07]}
        portal={{ current: gl.domElement.parentNode as HTMLElement }}
      >
        <S.Wrapper>
          <Me />
        </S.Wrapper>
      </Html>
    </primitive>
  );
};

export default ToyScreen;
