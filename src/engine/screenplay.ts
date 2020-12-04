import {populateOptions, render} from "./renderer";
import {textArea} from "../main";
import {Scene1} from "../testdata/scene/scene1";

const master = new Scene1();

export function init(): void {
  render("Welcome...");

  textArea.addEventListener("click", intro);
}

function intro() {
  textArea.removeEventListener("click", intro);

  render(master.render());

  populateOptions(master);
}
