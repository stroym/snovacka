import {Scene} from "../../base/scene";
import {eliza} from "../../main";
import {Scene2} from "./scene2";

export class Scene1 extends Scene {
  constructor() {
    super(1, "prompt 1", [new Scene2()]);
  }

  render(): string {
    if (eliza.name.firstName == "Eliza") {
      eliza.body.breasts.cupSize = "AAA";
      return "yes" + eliza.body.breasts.cupSize;
    } else {
      return "no";
    }
  }
}
