import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import {Character} from "./base/character/character";
import {PcAlex} from "./testdata/character/pc/pcAlex";
import {NpcEliza} from "./testdata/character/npc/npcEliza";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const player: Character = new PcAlex();
export const eliza: NpcEliza = new NpcEliza();

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