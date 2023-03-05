import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import * as S from "./HTMLSection.style";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import Image from "next/image";

import closeIcon from "../assets/icons/error.png";
import diamondIcon from "../assets/icons/diamond.png";
import ringIcon from "../assets/icons/circle-outline.png";

const RING_COLORS = [
  { color: "0xc9c9c9", name: "silver" },
  { color: "0xfcc687", name: "gold" },
  { color: "0xd79e83", name: "gold red" },
];

const GEM_COLORS = [
  { color: "0xfdfdfd", name: "white" },
  { color: "0xf8e659", name: "yellow" },
  { color: "0x46d282", name: "emerald" },
  { color: "0x46a2e2", name: "sapphire" },
  { color: "0xe24678", name: "ruby" },
];

const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, 0, 5.7);
const CAMERA_DEFAULT_ROTATION = new THREE.Vector3(0, 0, 0);

const SCENE_DEFAULT_SETTING = {
  sec1: {
    rotation: new THREE.Vector3(1.3, -0.8, 0),
    position: new THREE.Vector3(-1.3, -0.6, -0.3),
  },
  sec2: {
    rotation: new THREE.Vector3(1, 1.1, 0),
    position: new THREE.Vector3(0, -1.9, 0.7),
  },
  customizing: {
    rotation: new THREE.Vector3(0, Math.PI * -0.5, 0),
    position: new THREE.Vector3(0, -1.9, 0),
  },
};

interface HTMLSectionProps {
  meshesMap: any;
}

enum MaterialType {
  Ring = "ring",
  Diamond = "diamond",
}

const HTMLSection = ({ meshesMap }: HTMLSectionProps) => {
  gsap.registerPlugin(ScrollTrigger);

  const [customizeMode, _setCustomizeMode] = useState(false);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);

  const three = useThree();
  const scroll = useScroll();

  const [selectedMaterialType, _setSelectedMaterialType] = useState<MaterialType | null>(null);

  const targetMaterialList = useMemo(() => {
    switch (selectedMaterialType) {
      case MaterialType.Diamond:
        return GEM_COLORS;

      case MaterialType.Ring:
        return RING_COLORS;
      default:
        return [];
    }
  }, [selectedMaterialType]);

  const setSelectedMaterialType = useCallback(
    (selectedType: MaterialType | null) => {
      const tl = gsap.timeline();

      if (selectedType === MaterialType.Diamond) {
        tl.to(three.camera.position, {
          x: 1.6,
          y: 1.2,
          z: 2.55,
          duration: 1.5,
        }).to(
          three.scene.position,
          {
            x: -0.01,
            y: -3,
            z: 0,
            duration: 1.5,
          },
          "-=1.5"
        );
      } else {
        tl.to(three.camera.position, {
          x: CAMERA_DEFAULT_POSITION.x,
          y: CAMERA_DEFAULT_POSITION.y,
          z: CAMERA_DEFAULT_POSITION.z,
          duration: 1.5,
        }).to(
          three.scene.position,
          {
            x: SCENE_DEFAULT_SETTING.customizing.position.x,
            y: SCENE_DEFAULT_SETTING.customizing.position.y,
            z: SCENE_DEFAULT_SETTING.customizing.position.z,
            duration: 1.5,
          },
          "-=1.5"
        );
      }

      _setSelectedMaterialType(selectedType);
    },
    [three]
  );

  const initCameraSetting = useCallback(() => {
    three.camera.position.set(
      CAMERA_DEFAULT_POSITION.x,
      CAMERA_DEFAULT_POSITION.y,
      CAMERA_DEFAULT_POSITION.z
    );
    three.camera.rotation.set(
      CAMERA_DEFAULT_ROTATION.x,
      CAMERA_DEFAULT_ROTATION.y,
      CAMERA_DEFAULT_ROTATION.z
    );
  }, [three]);

  useEffect(() => {
    scroll.el.style.overflow = "hidden";

    three.scene.rotation.set(
      SCENE_DEFAULT_SETTING.sec1.rotation.x,
      SCENE_DEFAULT_SETTING.sec1.rotation.y,
      SCENE_DEFAULT_SETTING.sec1.rotation.z
    );

    initCameraSetting();

    const tl = gsap.timeline();
    tl.fromTo(
      three.scene.position,
      {
        x: -3.3,
        y: 0.4,
        z: 0.6,
      },
      {
        x: SCENE_DEFAULT_SETTING.sec1.position.x,
        y: SCENE_DEFAULT_SETTING.sec1.position.y,
        z: SCENE_DEFAULT_SETTING.sec1.position.z,
        duration: 4,
        onComplete: () => {
          scroll.el.style.overflow = "auto";
        },
      }
    );

    tl.to(three.scene.position, {
      x: SCENE_DEFAULT_SETTING.sec2.position.x,
      y: SCENE_DEFAULT_SETTING.sec2.position.y,
      z: SCENE_DEFAULT_SETTING.sec2.position.z,
      scrollTrigger: {
        scroller: scroll.el,
        trigger: section2Ref.current,
        start: "top bottom",
        end: "top top",
        // markers: true,
        scrub: true,
        immediateRender: false,
      },
      onUpdate: () => {},
    }).to(three.scene.rotation, {
      x: SCENE_DEFAULT_SETTING.sec2.rotation.x,
      y: SCENE_DEFAULT_SETTING.sec2.rotation.y,
      z: SCENE_DEFAULT_SETTING.sec2.rotation.z,
      scrollTrigger: {
        scroller: scroll.el,
        trigger: section2Ref.current,
        start: "top bottom",
        end: "top top",
        // markers: true,
        scrub: true,
        immediateRender: false,
      },
      onUpdate: () => {},
    });
  }, []);

  const setCustomizeMode = useCallback((customizeMode: boolean) => {
    _setCustomizeMode(customizeMode);
    const tl = gsap.timeline();
    if (customizeMode) {
      scroll.el.style.overflow = "hidden";

      tl.to(three.scene.rotation, {
        x: SCENE_DEFAULT_SETTING.customizing.rotation.x,
        y: SCENE_DEFAULT_SETTING.customizing.rotation.y,
        z: SCENE_DEFAULT_SETTING.customizing.rotation.z,
        duration: 1,
      }).to(three.scene.position, {
        x: SCENE_DEFAULT_SETTING.customizing.position.x,
        y: SCENE_DEFAULT_SETTING.customizing.position.y,
        z: SCENE_DEFAULT_SETTING.customizing.position.z,
        duration: 1,
        onComplete: () => {
          if (!three.controls) return;
          //@ts-ignore
          three.controls.enabled = true;
          //@ts-ignore
          three.controls.autoRotate = true;
        },
      });
    } else {
      if (!three.controls) return;
      //@ts-ignore
      three.controls.enabled = false;
      //@ts-ignore
      three.controls.autoRotate = false;

      initCameraSetting();

      tl.to(three.scene.rotation, {
        x: SCENE_DEFAULT_SETTING.sec2.rotation.x,
        y: SCENE_DEFAULT_SETTING.sec2.rotation.y,
        z: SCENE_DEFAULT_SETTING.sec2.rotation.z,
        duration: 1,
      }).to(three.scene.position, {
        x: SCENE_DEFAULT_SETTING.sec2.position.x,
        y: SCENE_DEFAULT_SETTING.sec2.position.y,
        z: SCENE_DEFAULT_SETTING.sec2.position.z,
        duration: 1,
        onComplete: () => {
          scroll.el.style.overflow = "auto";
        },
      });
    }
  }, []);

  return (
    <S.Wrapper ref={scrollSectionRef}>
      {customizeMode && (
        <S.CustomizeModeWrapper>
          <S.ExitButton
            onClick={() => {
              setCustomizeMode(false);
            }}
          >
            Exit
          </S.ExitButton>
          <S.CustomeMenuSection>
            <S.CustomeMenuList>
              <S.CustomeMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMaterialType(MaterialType.Diamond);
                }}
              >
                <Image src={diamondIcon.src} width="30" height="30" />
              </S.CustomeMenuItem>
              <S.CustomeMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMaterialType(MaterialType.Ring);
                }}
              >
                <Image src={ringIcon.src} width="30" height="30" />
              </S.CustomeMenuItem>
            </S.CustomeMenuList>

            <S.MaterialListSection
              style={{
                opacity: selectedMaterialType ? 0.9 : 0,
              }}
            >
              <S.MaterialList>
                {targetMaterialList.map((r) => (
                  <S.MaterialListItem
                    key={r.name}
                    onClick={() => {
                      const targetMesh =
                        selectedMaterialType === MaterialType.Ring
                          ? meshesMap.current.ring
                          : meshesMap.current.diamond;

                      targetMesh.material.color.setHex(r.color);
                    }}
                  >
                    {r.name}
                  </S.MaterialListItem>
                ))}
                <S.MaterialListItem
                  onClick={() => {
                    setSelectedMaterialType(null);
                  }}
                >
                  <Image src={closeIcon.src} width="20" height="20" />
                </S.MaterialListItem>
              </S.MaterialList>
            </S.MaterialListSection>
          </S.CustomeMenuSection>
        </S.CustomizeModeWrapper>
      )}

      <S.Header>
        <S.Title>{"CRYSTAL & Co."}</S.Title>
      </S.Header>

      <S.IntroSection
        ref={section1Ref}
        style={{ transition: "1s ease-in", transform: `translateX(${customizeMode ? "100%" : 0})` }}
      >
        <S.IntroContentsWrapper>
          <S.IntroContentsInnerWrapper>
            <S.H1>Unique Jewerlry</S.H1>
            <S.P>
              Customize your unique ring with graphic angles and pure lines that combine to create
              the pure beauty of the collection.
            </S.P>
          </S.IntroContentsInnerWrapper>
        </S.IntroContentsWrapper>
      </S.IntroSection>

      <S.EmotionSection
        ref={section2Ref}
        style={{ transition: "1s ease-in", transform: `translateX(${customizeMode ? "100%" : 0})` }}
      >
        <S.EmotionContentsWrapper>
          <S.H1>Emotions</S.H1>
          <S.P>
            Colorful gemstones from aquamarine, amethyst, tourmaline to diamonds come together in
            white gold on this luxury ring.
          </S.P>
          <S.CustomizeButton
            onClick={() => {
              setCustomizeMode(true);
            }}
          >
            Customize
          </S.CustomizeButton>
        </S.EmotionContentsWrapper>
      </S.EmotionSection>
    </S.Wrapper>
  );
};

export default HTMLSection;
