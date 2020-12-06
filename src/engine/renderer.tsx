import {Scene} from "../base/scene";
import {optionsContainer, textArea} from "../index";
import React from "react";
import {OptionSelector} from "./custom/options";
import ReactDOM from "react-dom";

//TODO reevaluate if this is a good way to do this now
export function render(text: string): void {
  textArea.innerHTML = text;
}

//TODO additive scene text rendering with optional autoscroll (might require some scene.render() rethinking

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