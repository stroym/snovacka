import {Scene} from "../../base/scene";
import {eliza} from "../../main";

export class Scene2 extends Scene {

  constructor() {
    super(
      2,
      "prompt 2"
    );
  }

  render(): string {
    if (eliza.name.firstName == "Eliza") {

      eliza.body.breasts.cupSize = "BBB"
      return "yes" + eliza.body.breasts.cupSize
    } else {
      return "no"
    }
  }

  //TODO edit
}