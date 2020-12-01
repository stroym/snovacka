import {textArea} from "../main";
import {Scene} from "../base/scene";

//TODO these ought to have their own div situated (most likely) below the text area
export let options: HTMLAnchorElement[] = [];

//TODO render functions will have to render containers populated with text, not actual text
//1 paragraph = 1 container, probably (possible ingame setting: additive/immediate rendering)
//in additive mode autoscroll to bottom (if applicable)
export function render(text: string): void {
  textArea.innerHTML = text;
}

export function renderAdditive(text: string): void {
  textArea.innerHTML += text;
}

//TODO links are good and all, but probably just a stepping stone
export function buildOption(prompt: string, target: Scene): HTMLAnchorElement {
  const a = document.createElement("a");
  a.textContent = (options.length + 1) + ": " + prompt;
  a.href = "javascript:;";

  a.addEventListener("click", function () {
    render(target.render());
  });

  return a;
}

export function printOptions(scene: Scene): void {
  options = [];

  for (const s of scene.scenes) {
    options.push(buildOption(s.prompt, s));
  }

  for (let i = 0; i < options.length; i++) {
    textArea.append(options[i]);
  }
}
