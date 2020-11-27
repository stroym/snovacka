import {printOptions, render} from "./renderer";
import {textArea} from "../main";
import {Scene1} from "../data/scene/scene1";

const master = new Scene1();

export function init() {
  render("Welcome...");

  textArea.addEventListener("click", intro);
}

function intro() {
  textArea.removeEventListener("click", intro);

  render(master.render());

  printOptions(master);

  //intercept click/keypress or do it via functions, somehow
}
