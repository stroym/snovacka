import {textArea} from "../main";
import {Scene} from "../base/scene";
import {OptionSelector} from "./custom/optionSelector";

//TODO these ought to have their own div situated (most likely) below the text area
export const optionsContainer = document.getElementById("options-container")!;

//TODO render functions will have to render containers populated with text, not actual text
//1 paragraph = 1 container, probably (possible ingame setting: additive/immediate rendering)
//in additive mode autoscroll to bottom (if applicable)
export function render(text: string): void {
  textArea.innerHTML = text;
}

export function renderAdditive(text: string): void {
  textArea.innerHTML += text;
}

export function populateOptions(scene: Scene): void {
  for (const s of scene.scenes) {
    optionsContainer.appendChild(
      new OptionSelector(
        (optionsContainer.childElementCount + 1) + ": " + s.prompt,
        function () {
          render(s.render());
        }
      )
    );
  }
}