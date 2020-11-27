import {Scene} from "../../base/scene";
import {eliza} from "../../main";

export class Scene2 extends Scene {

  constructor() {
    super(2, "prompt 2");
  }

  render(): string {
    if (eliza.name.firstName == "Eliza") {
      eliza.appearance.breasts.cupSize = "BBB";
      return "yes" + eliza.appearance.breasts.cupSize;
    } else {
      return "no";
    }
  }

  //TODO edit
}
