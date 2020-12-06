import {Scene} from "../../../base/scene";
import {Scene2} from "../002/scene2";
import {Scene3} from "../003/scene3";
import {Scene4} from "../004/scene4";

export class Scene1 extends Scene {

  constructor() {
    super("1", "prompt 1", [new Scene2(), new Scene3(), new Scene4()]);
  }

  render(): string {
    return "welcome to your personal hell";
  }

}