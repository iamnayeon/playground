/**
 * inspired from https://gist.github.com/gre/1650294
 * only considering the t value for the range [0, 1] => [0, 1]
 */

export enum EASING {
  LINEAR = "linear",
  EASE_IN_QUAD = "easeInQuad",
  EASE_OUT_QUAD = "easeOutQuad",
  EASE_IN_OUT_QUAD = "easeInOutQuad",
  EASE_IN_CUBIC = "easeInCubic",
  EASE_OUT_CUBIC = "easeOutCubic",
  EASE_IN_OUT_CUBIC = "easeInOutCubic",
  EASE_IN_QUART = "easeInQuart",
  EASE_OUT_QUART = "easeOutQuart",
  EASE_IN_OUT_QUART = "easeInOutQuart",
  EASE_IN_QUINT = "easeInQuint",
  EASE_OUT_QUINT = "easeOutQuint",
  EASE_IN_OUT_QUINT = "easeInOutQuint",
}

export const EASING_FUNCTIONS = {
  // no easing, no acceleration
  [EASING.LINEAR]: (t: number) => t,
  // accelerating from zero velocity
  [EASING.EASE_IN_QUAD]: (t: number) => t * t,
  // decelerating to zero velocity
  [EASING.EASE_OUT_QUAD]: (t: number) => t * (2 - t),
  // acceleration until halfway, then deceleration
  [EASING.EASE_IN_OUT_QUAD]: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  [EASING.EASE_IN_CUBIC]: (t: number) => t * t * t,
  // decelerating to zero velocity
  [EASING.EASE_OUT_CUBIC]: (t: number) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  [EASING.EASE_IN_OUT_CUBIC]: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  [EASING.EASE_IN_QUART]: (t: number) => t * t * t * t,
  // decelerating to zero velocity
  [EASING.EASE_OUT_QUART]: (t: number) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  [EASING.EASE_IN_OUT_QUART]: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  [EASING.EASE_IN_QUINT]: (t: number) => t * t * t * t * t,
  // decelerating to zero velocity
  [EASING.EASE_OUT_QUINT]: (t: number) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  [EASING.EASE_IN_OUT_QUINT]: (t: number) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
};
