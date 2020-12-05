import {Scene} from "../../base/scene";
//TODO using webpack should solve this, hopefully
// @ts-ignore
import * as text from "../text/scene2.md";

export class Scene2 extends Scene {

  constructor() {
    super(2, "prompt 2");
  }

  render(): string {
    let str = "";

    fetch("../text/scene2.md")
      .then((r) => r.text())
      .then(text => {
        console.log(text);
      });

    return text;
  }

}
