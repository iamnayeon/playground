import * as S from "./Loader.style";
import { useEffect, useRef, useState, useMemo } from "react";
import { useProgress } from "@react-three/drei";
import legoLoading from "../assets/lego_loading.svg";
import Image from "next/image";

export default () => {
  const { progress } = useProgress();

  const progressBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressBar.current) return;
    progressBar.current.style.width = `${progress}%`;
  }, [progress]);

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image src={legoLoading} />
      </S.ImageWrapper>

      <S.ProgressBarContainer>
        <S.Progress ref={progressBar} />
      </S.ProgressBarContainer>

      <S.Text>loading...</S.Text>
    </S.Wrapper>
  );
};
