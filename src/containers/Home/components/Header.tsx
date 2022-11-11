import { useContainer } from "unstated-next";
import * as S from "./Header.style";
import ThreeContext from "../context/ThreeContext";
const Header = () => {
  const { scroll } = useContainer(ThreeContext);

  return (
    <S.Header>
      <S.Title
        onClick={() => {
          if (!scroll) return;
          scroll.el.scrollTop = 0;
        }}
      >
        Nayeon Kim
      </S.Title>
    </S.Header>
  );
};

export default Header;
