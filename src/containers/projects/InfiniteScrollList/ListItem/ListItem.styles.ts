import styled from "styled-components";
import { media } from "utils/media";

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 10px 0;
  line-height: 1.25;
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: 10vw;
  text-transform: lowercase;
  z-index: 1;
  line-height: 1.25;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
  color: transparent;
`;

export const TitleCloned = styled(Title)`
  position: absolute;
  top: 0;
  color: black;
  pointer-events: none;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.5s cubic-bezier(1, 0.01, 0.17, 1.17);
  ${TitleWrapper}:hover & {
    clip-path: inset(0 0 0 0);
  }
`;

export const Image = styled.img`
  position: fixed;
  z-index: -1;
  left: 45vw;
  top: 30vh;
  opacity: 0;
  height: clamp(250px, 25vw, 25vw);
  width: auto;
  pointer-events: none;
  object-fit: cover;
`;

export const InfoBlockWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 70vw;
  z-index: 0;
  text-align: left;
  font-size: 20px;
  opacity: 0;
  display: none;
  ${Wrapper}:hover & {
    opacity: 1;
  }

  ${media.tablet} {
    display: block;
  }
`;

export const InfoTitle = styled.h1`
  margin-bottom: 10px;
`;

function transitionDelayPerChild() {
  let str = "";
  for (let i = 0; i < 4; i += 1) {
    str += `
        &:nth-child(${i + 1}) {
          transition-delay: ${i / 10}s;
         }
      `;
  }
  return str;
}

export const InfoItem = styled.p`
  color: #999;
  transform: translateY(10px);
  transition: all 0.25s ease-in-out;
  opacity: 0;
  line-height: 1.5;

  ${Wrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
    ${transitionDelayPerChild()};
  }
`;
