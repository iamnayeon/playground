import { createContainer } from "unstated-next";
import { useState } from "react";
import { ScrollControlsState } from "@react-three/drei";
import { RootState } from "@react-three/fiber";
//context to use object about R3F outside of the canvas
export default createContainer(() => {
  const [scroll, setScroll] = useState<ScrollControlsState>();
  const [three, setThree] = useState<RootState>();

  return {
    scroll,
    setScroll,
    three,
    setThree,
  };
});
