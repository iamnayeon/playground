import styled from "styled-components";

export const Wrapper = styled.div`
  color: #52322b;
  position: relative;
`;

export const Header = styled.header`
  padding: 40px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Title = styled.div`
  flex: 1;
  font-size: 25px;
  font-family: cormorant;
  font-size: 1.5rem;
`;

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  padding-right: 50px;
  font-weight: 700;
`;

export const Section = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

export const IntroSection = styled(Section)`
  justify-content: flex-end;
`;

export const IntroContentsWrapper = styled.div`
  width: 50%;
  padding: 50px 15% 0 0;
`;

export const IntroContentsInnerWrapper = styled.div`
  width: 400px;
`;

export const EmotionSection = styled(Section)`
  align-items: flex-start;
`;

export const EmotionContentsWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
`;

export const H1 = styled.h1`
  font-size: 6rem;
  line-height: 1.25;
  margin-bottom: 20px;
  font-family: cormorant;
  font-weight: bold;
  text-transform: uppercase;
`;

export const P = styled.p`
  line-height: 1.25;
  margin-bottom: 50px;
  color: whitesmoke;
`;

const CommonButton = styled.button`
  background-color: white;
  color: #52322b;
  border: 1px solid #52322b;
  border-radius: 50px;
  cursor: pointer;
`;

export const CustomizeModeWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const CustomizeButton = styled(CommonButton)`
  width: 200px;
  height: 50px;
`;

export const ExitButton = styled(CommonButton)`
  width: 100px;
  height: 30px;
  position: absolute;
  top: calc(50% + 3%);
  right: 50px;
`;

export const CustomeMenuSection = styled.section`
  position: absolute;
  width: 100%;
  bottom: 40px;
  justify-content: center;
  display: flex;
`;
export const CustomeMenuList = styled.ul`
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

export const CustomeMenuItem = styled.li`
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  opacity: 0.8;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MaterialListSection = styled.section`
  position: absolute;
  bottom: 70px;
  transition: all 0.5s;
`;

export const MaterialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border-radius: 50px;
  background-color: white;
  color: black;
  gap: 2rem;
  border: 1px solid black;
`;

export const MaterialListItem = styled.li`
  cursor: pointer;
`;
