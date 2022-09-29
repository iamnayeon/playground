import * as S from "./ListItem.styles";
import React, { useRef, useCallback, useState } from "react";
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
  const [imageTransformState, _setImageTransformState] = useState({
    scale: 0.8,
    translate: { x: 0, y: -20 },
    rotate: 0,
  });

  const setImageTransformState = useCallback((key: string, value: any) => {
    _setImageTransformState((p) => ({ ...p, [key]: value }));
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const speed = -5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    setImageTransformState("translate", { x, y });
  }, []);

  const handleImgAnimating = useCallback(
    (
      initialState: number,
      newState: number,
      duration: number,
      updateStyle: any,
      easeMethod?: EASING
    ) => {
      animate({
        fromValue: initialState,
        toValue: newState,
        onUpdate: (newState, callback) => {
          updateStyle(newState);
          callback();
        },
        onComplete: () => {
          //
        },
        duration,
        easeMethod: easeMethod || EASING.EASE_IN_OUT_CUBIC,
      });
    },
    []
  );

  const setOpacity = useCallback((newOpacity: number) => {
    if (!imageRef.current) return;
    imageRef.current.style.opacity = `${newOpacity}`;
  }, []);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.TitleWrapper
        onMouseEnter={() => {
          handleImgAnimating(0, 1, 500, setOpacity);
          handleImgAnimating(0.8, 1, 500, (newState: number) =>
            setImageTransformState("scale", newState)
          );

          //random num between -15 ~ 15
          const rotationDeg = Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);
          handleImgAnimating(0, rotationDeg, 500, (newState: number) =>
            setImageTransformState("rotate", newState)
          );

          if (!wrapperRef.current) return;
          wrapperRef.current.addEventListener("mousemove", onMouseMove);
        }}
        onMouseLeave={() => {
          handleImgAnimating(1, 0, 500, setOpacity);
          handleImgAnimating(1, 0, 500, (newState: number) =>
            setImageTransformState("scale", newState)
          );

          if (!wrapperRef.current) return;
          wrapperRef.current.removeEventListener("mousemove", onMouseMove);
        }}
      >
        <S.Title>{title}</S.Title>
        <S.TitleCloned>{title}</S.TitleCloned>
      </S.TitleWrapper>

      <S.Image
        src={imageUrl}
        ref={imageRef}
        style={{
          transform: `translate3d(${imageTransformState.translate.x}%, ${imageTransformState.translate.y}%, 0) scale(${imageTransformState.scale}) rotate(${imageTransformState.rotate}deg)`,
        }}
      />

      <S.InfoBlockWrapper>
        {infos.map((info, i) => (
          <S.InfoItem key={i}>{info}</S.InfoItem>
        ))}
      </S.InfoBlockWrapper>
    </S.Wrapper>
  );
};

export default ListItem;
