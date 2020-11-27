import {Character} from "./base/character/character";
import {resolveKeypress} from "./engine/background";
import {NpcEliza} from "./data/character/npc/npcEliza";
import {screenplay} from "./engine/screenplay";

export let textArea = document.getElementById('text-area')!
// export let pc: Character = new PcAlex()
export let eliza: Character = new NpcEliza()

function init() {
  document.addEventListener("keypress", resolveKeypress);
}

init()
screenplay.init()