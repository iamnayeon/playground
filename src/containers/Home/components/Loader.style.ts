import styled, { keyframes } from "styled-components";

const scale = keyframes`
  from {
    transform: scale(1);
  } to {
    transform: scale(0.8);
  }
`;

export const Wrapper = styled.div`
  background-color: #fffaf1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${scale} 0.4s ease-in-out infinite;
  animation-direction: alternate;
`;

export const ProgressBarContainer = styled.div`
  height: 3px;
  width: 200px;
  border: 1px solid black;
  position: relative;
  margin: 10px 0 5px;
`;

export const Progress = styled.div`
  position: absolute;
  background-color: black;
  height: 100%;
  left: 0;
`;

export const Text = styled.p`
  font-size: 0.8rem;
`;
