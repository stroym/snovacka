import {Scene} from "../base/scene";
import {optionsContainer, textArea} from "../index";
import React from "react";
import {OptionSelector} from "./custom/options";
import ReactDOM from "react-dom";

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

  let children = [];

  for (const s of scene.scenes) {
    children.push(
      React.createElement(OptionSelector, {
        key: "option" + children.length,
        content: (children.length + 1) + ": " + s.prompt,
        onClick: function () {
          render(s.render());
        }
      })
    );
  }

  ReactDOM.render(children, optionsContainer);
}