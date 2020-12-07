import {Scene} from "../base/scene";
import text1 from "../testdata/scene/scene1.md";
import text2 from "../testdata/scene/scene2.md";

export let intro = new Scene("intro-scene", "", [], () => {
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
