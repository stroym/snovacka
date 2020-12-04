import {Scene} from "../../base/scene";

export class Scene2 extends Scene {

  constructor() {
    super(2, "prompt 2");
  }

  render(): string {
    // if (eliza.name.firstName == "Eliza") {
    //   eliza.appearance.breasts.cupSize = CupSize.AA;
    //   return "yes" + eliza.appearance.breasts.cupSize;
    // } else {
    //   return "no";
    // }

    let str = "";

    loadFile("../text/scene2.md").then(value => {
      str = value.toString();
    });

    return str;
  }

}

async function loadFile(url: string): Promise<string> {
  const response = await fetch(url);
  return await response.text();
}
