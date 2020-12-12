/* eslint-disable @typescript-eslint/no-unused-vars */
import Scene from "../base/scene";
import test from "../../../resources/scene/test.md";
import text1 from "../../../resources/scene/scene1.md";
import text2 from "../../../resources/scene/scene2.md";
import {eliza} from "./characters";

/**
 * This scene is mandatory and as far as I know its usage cannot be avoided, as it's being passed as the first scene to
 * be rendered.
 */
export let intro = new Scene("snovacka-intro-scene", "", test, []);

let scene1 = new Scene("scene1", "prompt 1", text1, intro);
let scene2 = new Scene("scene2", "prompt 2", text2, scene1);
let scene3 = new Scene("scene3", "prompt 3", `${eliza.name.firstName}`, scene1);
let scene4 = new Scene("scene4", "prompt 4", "scene4", scene1);
