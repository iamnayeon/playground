import * as S from "./ListItem.styles";
import React, { useRef, useCallback } from "react";
import animate from "utils/functions/animate";
import { EASING } from "utils/functions/easing";

interface Props {
  title: string;
  imageUrl: string;
  infos?: string[];
}

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

  const handleOpacity = (initialOpacity: number, newOpacity: number, duration: number) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        if (!imageRef.current) return;
        imageRef.current.style.opacity = `${newOpacity}`;

        callback();
      },
      onComplete: () => {
        //
      },
      duration,
      easeMethod: EASING.EASE_IN_OUT_CUBIC,
    });
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Title
        onMouseEnter={() => {
          handleOpacity(0, 1, 500);

          if (!wrapperRef.current) return;
          wrapperRef.current.addEventListener("mousemove", onMouseMove);
        }}
        onMouseLeave={() => {
          handleOpacity(1, 0, 500);
          if (!wrapperRef.current) return;
          wrapperRef.current.removeEventListener("mousemove", onMouseMove);
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
