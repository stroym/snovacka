import {Character} from "./base/character/character";
import {resolveKeypress} from "./engine/background";
import {NpcEliza} from "./data/character/npc/npcEliza";
import {init as initScreenplay} from "./engine/screenplay";

export const textArea = document.getElementById("text-area")!;
// export let pc: Character = new PcAlex()
export const eliza: Character = new NpcEliza();

function init() {
  document.addEventListener("keypress", resolveKeypress);
}

init();
initScreenplay();
