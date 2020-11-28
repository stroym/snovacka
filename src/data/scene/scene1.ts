import {Scene} from "../../base/scene";
import {eliza} from "../../main";
import {Scene2} from "./scene2";
import {CupSize} from "../../base/character/body/breasts";

export class Scene1 extends Scene {

  constructor() {
    super(1, "prompt 1", [new Scene2()]);
  }

  render(): string {
    if (eliza.name.firstName == "Eliza") {
      eliza.appearance.breasts.cupSize = CupSize.D;
      return "yes" + eliza.appearance.breasts.cupSize;
    } else {
      return "no";
    }
  }

}
