import { EASING, EASING_FUNCTIONS } from "./easing";

type OnUpdateFunc = (value: number, callbackFun: any) => void;

interface Param {
  fromValue: number;
  toValue: number;
  onUpdate: OnUpdateFunc;
  onComplete: any;
  duration?: number;
  easeMethod?: EASING;
}

export default function ({
  fromValue,
  toValue,
  onUpdate,
  onComplete,
  duration = 600,
  easeMethod = EASING.LINEAR,
}: Param) {
  const startTime = Date.now();

  const tick = () => {
    const elapsed = Date.now() - startTime;

    const easingFunc = EASING_FUNCTIONS[easeMethod];
    const value =
      elapsed > duration
        ? toValue
        : fromValue + (toValue - fromValue) * easingFunc(elapsed / duration);

    window.requestAnimationFrame(() =>
      onUpdate(
        value,
        //callback
        elapsed <= duration ? tick : onComplete
      )
    );
  };

  tick();
}
