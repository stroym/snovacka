import {Scene} from "../../../base/scene";
import * as text from "./scene2.md";

export class Scene2 extends Scene {

  constructor() {
    super("2", "prompt 2");
  }

  render(): string {
    return text;
  }

}
