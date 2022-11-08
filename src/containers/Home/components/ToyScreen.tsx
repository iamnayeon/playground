import { useRef, useEffect } from "react";
import { Html } from "@react-three/drei";
import Me from "./Me";
import * as S from "./ToyScreen.style";
import { GLTFResult } from "./ToyShop";
import { useGLTF } from "@react-three/drei";
const ToyScreen = () => {
  const htmlRef = useRef<HTMLDivElement>(null);
  const { nodes } = useGLTF("/assets/toyshop.glb") as GLTFResult;

  useEffect(() => {
    if (htmlRef.current) {
      //events for fixing problem of disabled scrolling on the html section
      const htmlWrapperByDrei = htmlRef.current.parentElement as HTMLDivElement;
      const mouseMoveHandler = () => (htmlWrapperByDrei.style.pointerEvents = "auto");
      const wheelHandler = () => (htmlWrapperByDrei.style.pointerEvents = "none");

      htmlWrapperByDrei.addEventListener("mousemove", mouseMoveHandler);
      htmlWrapperByDrei.addEventListener("wheel", wheelHandler);

      return () => {
        htmlWrapperByDrei.removeEventListener("mousemove", mouseMoveHandler);
        htmlWrapperByDrei.removeEventListener("wheel", wheelHandler);
      };
    }
  }, []);

  return (
    <primitive object={nodes.screen}>
      <Html ref={htmlRef} transform occlude distanceFactor={0.72} position={[0, 0, 0.21]}>
        <S.Wrapper>
          <Me />
        </S.Wrapper>
      </Html>
    </primitive>
  );
};

export default ToyScreen;
