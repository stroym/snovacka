import {Character} from "./base/character"
import {pcAlex} from "./pc/pcAlex"
import {npcEliza} from "./npc/npcEliza"
import {buildOption, prefix, render} from "./helper/renderer";
import * as resolver from "./helper/resolver";
import {resolveKeypress} from "./helper/background";

export let textArea = document.getElementById('text-area')!
export let options: HTMLAnchorElement[] = [];
export let pc: Character = new pcAlex()
export let eliza: Character = new npcEliza()


function init() {
  render("Welcome...")

  document.addEventListener("keypress", resolveKeypress);

  textArea.removeEventListener('click', init)
  textArea.addEventListener('click', intro)
}

function intro() {
  textArea.removeEventListener('click', intro)

  render("Hi!")

  options = [
    buildOption("a", resolver.way1),
    buildOption("b", resolver.way2),
    buildOption("c", resolver.way3),
    buildOption("d", resolver.way4)
  ]

  for (let i = 0; i < options.length; i++) {
    textArea.append(prefix(options[i], i + 1))
  }

}

init()