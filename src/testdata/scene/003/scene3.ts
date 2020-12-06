import {Scene} from "../../../base/scene";

export class Scene3 extends Scene {

  constructor() {
    super("3", "prompt 3");
  }

  render(): string {
    return "scene 3";
  }

}
