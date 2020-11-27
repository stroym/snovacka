import {textArea} from "../main";
import {Scene} from "../base/scene";

export let options: HTMLAnchorElement[] = [];

export function render(text: string) {
  textArea.innerHTML = text;
}

export function renderAdditive(text: string) {
  textArea.innerHTML += text;
}

export function buildOption(prompt: string, target: Scene) {
  const a = document.createElement("a");
  a.textContent = prompt;
  a.href = "javascript:;";

  a.addEventListener("click", function () {
    render(target.render());
  });

  return a;
}

export function prefix(a: any, order: number) {
  a.textContent = order + ": " + a.textContent;
  a.order = order;

  return a;
}

export function printOptions(scene: Scene) {
  options = [];

  for (const s of scene.scenes) {
    options.push(buildOption(s.prompt, s));
  }

  for (let i = 0; i < options.length; i++) {
    textArea.append(prefix(options[i], i + 1));
  }

  //what should even actually happen? on valid click render next scene
  //how to associate the key pressed/link clicked with what to do

  scene.transition(0);
}
