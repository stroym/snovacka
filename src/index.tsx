import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {resolveKeypress} from "./engine/background";
import {init as initScreenplay} from "./engine/screenplay";
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

export const playArea = document.getElementById("play-area")!;
export const textArea = document.getElementById("text-area")!;
export const optionsContainer = document.getElementById("options-container")!;
export const player: Character = new PcAlex();
export const eliza: NpcEliza = new NpcEliza();

document.title = "Nheyr's Garden";
document.addEventListener("keypress", resolveKeypress);

initScreenplay();