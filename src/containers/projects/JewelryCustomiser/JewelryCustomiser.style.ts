import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface LoadedWrapperProps {
  shouldHide: boolean;
}

export const LoadedWrapper = styled.div<LoadedWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #e6bfbe;
  justify-content: center;
  align-items: center;
  transition: transform 1s;
  ${(props) =>
    props.shouldHide &&
    css`
      transform: translateX(100%);
    `}
`;

interface LoaderLineProps {
  progress: number;
}

export const LoaderLine = styled.div<LoaderLineProps>`
  transform-origin: left;
  transition: transform 1s;
  transform: ${(props) => `scaleX(${props.progress}%)`};

  background-color: black;
  height: 1px;
  width: 30%;
`;
