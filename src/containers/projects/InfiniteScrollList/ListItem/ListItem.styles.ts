import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 10px 0;
  line-height: 1.25;
`;

export const Title = styled.h3`
  font-size: 10vw;
  text-transform: lowercase;
  z-index: 1;
  line-height: 1.25;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
  color: transparent;
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
  z-index: 1;
  text-align: left;
  font-size: 20px;
  opacity: 0;
`;
export const InfoItem = styled.p``;