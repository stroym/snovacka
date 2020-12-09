import Scene from "../../base/scene";
import text1 from "./scene1.md";
import text2 from "./scene2.md";

/**
 * This scene is mandatory and as far as I know its usage cannot be avoided, as it's being passed as the first scene to
 * be rendered.
 */
export let intro = new Scene("snovacka-intro-scene", "", [], () => {
  return "welcome to hell";
});

export let scene1 = new Scene("scene1", "prompt 1", intro, () => {
  return text1;
});

export let scene2 = new Scene("scene2", "prompt 2", scene1, () => {
  return text2;
});

export let scene3 = new Scene("scene3", "prompt 3", scene1, () => {
  return "hello";
});

export let scene4 = new Scene("scene4", "prompt 4", scene1, () => {
  return "scene4";
});
