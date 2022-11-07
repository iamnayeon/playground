import { createContainer } from "unstated-next";
import { useState } from "react";
//context to use object about R3F outside of the canvas
export default createContainer(() => {
  const [scroll, setScroll] = useState();
  const [three, setThree] = useState();

  return {
    scroll,
    setScroll,
    three,
    setThree,
  };
});
