import {Character} from "./base/character/character";
import {resolveKeypress} from "./engine/background";
import {NpcEliza} from "./testdata/character/npc/npcEliza";
import {init as initScreenplay} from "./engine/screenplay";
import {PcAlex} from "./testdata/character/pc/pcAlex";

export const textArea = document.getElementById("text-area")!;
export const player: Character = new PcAlex();
export const eliza: NpcEliza = new NpcEliza();

//TODO player selection/creation

function init() {
  document.addEventListener("keypress", resolveKeypress);
}

init();
initScreenplay();
