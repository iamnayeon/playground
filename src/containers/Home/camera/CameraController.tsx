import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import {
  INITIAL_CAMERA_POSITION_BY_DEVICE,
  INITIAL_CAMERA_ROTATION_BY_DEVICE,
  DEFAULT_CAMERA_POSITION_BY_DEVICE,
  DEFAULT_CAMERA_ROTATION_BY_DEVICE,
} from "../Home";
import { useContainer } from "unstated-next";
import ThreeContext from "../context/ThreeContext";

import MediaContext from "../context/MediaContext";
const CameraController = () => {
  const { setScroll, setThree } = useContainer(ThreeContext);
  const { media: _media } = useContainer(MediaContext);
  const scroll = useScroll();
  const three = useThree();

  useEffect(() => {
    setScroll(scroll);
    setThree(three);
  }, []);

  const media = useMemo(() => _media || "desktop", [_media]);

  const initialCameraPosition = INITIAL_CAMERA_POSITION_BY_DEVICE[media];
  const initialCameraRotation = INITIAL_CAMERA_ROTATION_BY_DEVICE[media];

  const defaultCameraPosition = DEFAULT_CAMERA_POSITION_BY_DEVICE[media];
  const defaultCameraRotation = DEFAULT_CAMERA_ROTATION_BY_DEVICE[media];

  useFrame((state) => {
    const offset = Math.min(Math.max(scroll.offset, 0), 1);
    state.camera.position.set(
      offset * (defaultCameraPosition.x - initialCameraPosition.x) + initialCameraPosition.x,
      offset * (defaultCameraPosition.y - initialCameraPosition.y) + initialCameraPosition.y,
      offset * (defaultCameraPosition.z - initialCameraPosition.z) + initialCameraPosition.z
    );
    state.camera.rotation.set(
      offset * (defaultCameraRotation.x - initialCameraRotation.x) + initialCameraRotation.x,
      offset * (defaultCameraRotation.y - initialCameraRotation.y) + initialCameraRotation.y,
      offset * (defaultCameraRotation.z - initialCameraRotation.z) + initialCameraRotation.z
    );

    if (scroll.el.scrollTop === 0) {
      three.scene.rotation.set(0, 0, 0);
    }
  });

  useEffect(() => {
    const _mousemoveHandler = (e: MouseEvent) => {
      if (Math.round(scroll.offset) === 0) return;
      three.scene.rotation.y = (e.clientX / window.innerWidth - 0.5) * 0.3;
      three.scene.rotation.x = Math.max(0, (e.clientY / window.innerHeight - 0.5) * 0.3);
    };

    window.addEventListener("mousemove", _mousemoveHandler);
    return () => {
      window.removeEventListener("mousemove", _mousemoveHandler);
    };
  }, []);

  return null;
};

export default CameraController;
