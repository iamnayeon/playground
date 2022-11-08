import { useContainer } from "unstated-next";
import * as S from "./Header.style";
import ThreeContext from "../context/ThreeContext";

const Header = () => {
  const { scroll, three } = useContainer(ThreeContext);

  return (
    <S.Header>
      <S.Title
        onClick={() => {
          if (!scroll || !three) return;
          scroll.el.scrollTop = 0;
          three.scene.rotation.y = 0;
          three.scene.rotation.x = 0;
        }}
      >
        Nayeon Kim
      </S.Title>
    </S.Header>
  );
};

export default Header;
