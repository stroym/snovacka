import {buildOption, prefix, render} from "./helper/renderer";
import * as resolver from "./helper/resolver";
import {resolveKeypress} from "./helper/background";
import {character} from "./base/character/character";
import {PcAlex} from "./character/pc/pcAlex";
import {NpcEliza} from "./character/npc/npcEliza";
import Character = character.Character;

export let textArea = document.getElementById('text-area')!
export let options: HTMLAnchorElement[] = [];
export let pc: Character = new PcAlex()
export let eliza: Character = new NpcEliza()

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