import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  padding: 5px 0;
  line-height: 1.25;
`;

export const Title = styled.h3`
  font-size: 10vw;
  text-transform: lowercase;
  z-index: 1;
  line-height: 1.1;
`;

export const Image = styled.img`
  position: fixed;
  left: 45vw;
  top: 30vh;
  opacity: 0;
  height: clamp(300px, 30vw, 30vw);
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
