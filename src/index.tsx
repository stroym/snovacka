import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import {Character} from "./base/character/character";
import {PcAlex} from "./testdata/character/pc/pcAlex";
import {NpcEliza} from "./testdata/character/npc/npcEliza";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const optionsContainer = document.getElementById("options-container")!;
export const player: Character = new PcAlex();
export const eliza: NpcEliza = new NpcEliza();

document.addEventListener("keypress", resolveKeypress);

function resolveKeypress(e: KeyboardEvent): void {
  //TODO switch between options on up/down +/- press?

  console.log(e.code);

  if (optionsContainer.childElementCount > 0 && (e.code.match("Digit[0-9]+") || e.code.match("Numpad[0-9]+"))) {
    const num = e.code.slice(e.code.length - 1);

    for (const option of optionsContainer.children) {
      if (option.textContent != null) {
        const promptNum = option.textContent.substring(0, option.textContent.indexOf(":"));

        if (num === promptNum) {
          // @ts-ignore
          option.click();
        }
      }
    }
  }
}