/* eslint-disable @typescript-eslint/no-unused-vars */
import Scene from "../base/Scene";
import test from "../../../resources/scene/test.md";
import text1 from "../../../resources/scene/scene1.md";
import text2 from "../../../resources/scene/scene2.md";
import {eliza} from "./Characters";
import {NonPlayableCharacter} from "../base/character/Character";
import Appearance from "../base/character/appearance/Appearance";

/**
 * This scene is mandatory and as far as I know its usage cannot be avoided, as it's being passed as the first scene to
 * be rendered.
 */
export let intro = Scene.fromFile(test);

let scene1 = new Scene("scene1", "prompt 1", text1, intro);
let scene2 = new Scene("scene2", "prompt 2", text2, scene1);
let scene3 = new Scene("scene3", "prompt 3", `${eliza.name.firstName}`, scene1);
let scene4 = new Scene("scene4", "prompt 4", "scene4", scene1);

export let characters = new Map<string, NonPlayableCharacter<Appearance>>([
  ["eliza", eliza]
]);

export default class Scenes {

  mapped: Map<string, Scene> = new Map<string, Scene>();

  getScene(id: string): Scene {
    let temp = this.mapped.get(id);

    if (temp) {
      return temp;
    } else {
      throw new Error("Scene " + id + " not found!");
    }
  }

  addScene(scene: Scene) {
    this.mapped.set(scene.id, scene);
  }

}