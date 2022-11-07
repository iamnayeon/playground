import styled, { keyframes } from "styled-components";

const rotation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(75deg);
}
`;

const underlineIn = keyframes`
 from {
  transform: scaleX(0); 
 }
 to {
  transform: scaleX(1);
 }
`;

const upDown = keyframes`
  from {
    transform: translateY(-10%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fffaf1;
`;

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const String = styled.div`
  font-size: 4rem;
  font-family: lexendDeca;
  text-align: center;
  white-space: nowrap;
`;

export const HoveredStringWrapper = styled.div`
  position: relative;
`;

export const Sentence = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px 0;
`;

export const HandLetter = styled(String)`
  ${IntroduceWrapper}:hover & {
    animation: ${rotation} 0.3s linear infinite;
    animation-direction: alternate;
  }
`;

export const Header = styled.header`
  width: 100%;
  top: 0;
  display: flex;
  padding: 30px 43px;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
`;

export const IconWrapper = styled.div`
  margin-left: 42px;
  cursor: pointer;
`;

export const UnderlineWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  transform-origin: left;
  bottom: -6px;

  ${HoveredStringWrapper}:hover & {
    animation: ${underlineIn} 0.9s cubic-bezier(1, 0.24, 0.16, 1.05);
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export const ScrollDownIconWrapper = styled.div`
  animation: ${upDown} 0.9s linear infinite;
  animation-direction: alternate;
`;

export const DownloadButtonWrapper = styled.a`
  padding: 18px 31px;
  margin-top: 3rem;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: #d0a3a3;
    border-radius: 1rem;
    inset: 0;
    transition: transform 0.4s ease-in-out;
  }

  :hover:before {
    transform: scale(0.9);
  }
`;

export const DownloadButtonInner = styled.div`
  color: white;
  font-family: lexendDeca;
  position: relative;
  z-index: 1;
`;
