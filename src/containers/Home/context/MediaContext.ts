import { createContainer } from "unstated-next";
import { useState, useEffect } from "react";
import * as Media from "../../../utils/media";

export type ValidDevice = "phone" | "desktop";

export default createContainer(() => {
  const [media, _setMedia] = useState<ValidDevice>();

  const setMedia = () =>
    _setMedia(window.innerWidth < Media.breakpoints.tablet ? "phone" : "desktop");

  useEffect(() => {
    setMedia();

    window.addEventListener("resize", setMedia);
    return () => {
      window.removeEventListener("resize", setMedia);
    };
  }, []);

  return {
    media,
  };
});
