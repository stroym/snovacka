import {populateOptions, render} from "./renderer";
import {Scene1} from "../testdata/scene/scene1";
import {playArea} from "../index";

const master = new Scene1();

export function init(): void {
  render("Welcome...");

  playArea.addEventListener("click", intro);
}

function intro() {
  playArea.removeEventListener("click", intro);

  render(master.render());

  populateOptions(master);
}
