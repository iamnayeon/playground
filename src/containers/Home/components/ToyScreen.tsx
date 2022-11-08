import { useRef, useEffect } from "react";
import { Html } from "@react-three/drei";
import Me from "./Me";
import * as S from "./ToyScreen.style";
const ToyScreen = ({ object }: { object: any }) => {
  const htmlRef = useRef<HTMLDivElement>(null);

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
    <group>
      <primitive object={object}>
        <Html ref={htmlRef} transform occlude distanceFactor={0.72} position={[0, 0, 0.21]}>
          <S.Wrapper>
            <Me />
          </S.Wrapper>
        </Html>
      </primitive>
    </group>
  );
};

export default ToyScreen;
