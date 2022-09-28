import * as S from "./ListItem.styles";
import React, { useRef, useCallback } from "react";

interface Props {
  title: string;
  imageUrl: string;
  infos?: string[];
}

const initialImgTransform = `translate3d(0, -20%, 0)`;

const ListItem = (props: Props) => {
  const { title, imageUrl, infos = ["example1", "example2", "example3"] } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!imageRef.current) return;
    const speed = -5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    imageRef.current.style.transform = `translate3d(${x}%, ${y}%, 0)`;
  }, []);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Title
        onMouseEnter={() => {
          if (!imageRef.current) return;
          imageRef.current.style.opacity = "1";

          if (!wrapperRef.current) return;
          wrapperRef.current.addEventListener("mousemove", onMouseMove);
        }}
        onMouseLeave={() => {
          if (!imageRef.current) return;
          imageRef.current.style.opacity = "0";

          if (!wrapperRef.current) return;
          wrapperRef.current.removeEventListener("mousemove", onMouseMove);
          imageRef.current.style.transform = initialImgTransform;
        }}
      >
        {title}
      </S.Title>

      <S.Image src={imageUrl} ref={imageRef} />

      <S.InfoBlockWrapper>
        {infos.map((info, i) => (
          <S.InfoItem key={i}>{info}</S.InfoItem>
        ))}
      </S.InfoBlockWrapper>
    </S.Wrapper>
  );
};

export default ListItem;
