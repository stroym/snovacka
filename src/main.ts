import {Character} from "./base/character"
import {pcAlex} from "./pc/pcAlex"
import {npcEliza} from "./npc/npcEliza"
import {render} from "./renderer"

export let textArea = document.getElementById('text-area')!
textArea.addEventListener('click', init)

let options: HTMLAnchorElement[] = [];

export let pc: Character = new pcAlex()
let eliza: Character = new npcEliza()

function init() {
  render("Welcome...")

  document.addEventListener("keypress", resolveKeypress);

  textArea.removeEventListener('click', init)
  textArea.addEventListener('click', intro)
}

function resolveKeypress(e: KeyboardEvent) {
  //TODO switch between options on up/down +/- press?

  if (options.length > 0 && (e.code.match("Digit[0-9]") || e.code.match("Numpad[0-9]"))) {
    let num = e.code.slice(e.code.length - 1)

    for (let option of options) {
      if (num == option.textContent!.charAt(0)) {
        option.click()
      }
    }
  }
}

export function way1() {
  render("1!")
}

export function way2() {
  render("2!")
}

export function way3() {
  render("3!")
}

export function way4() {
  render("4!")
}

function buildOption(prompt: string, target: any) {
  let a = document.createElement('a')
  a.textContent = prompt
  a.href = "javascript:;"

  a.addEventListener("click", target)

  return a
}

function prefix(a: any, order: number) {
  a.textContent = order + ": " + a.textContent
  a.order = order

  return a
}

function intro() {
  textArea.removeEventListener('click', intro)

  render("Hi!")

  options = [
    buildOption("a", way1),
    buildOption("b", way2),
    buildOption("c", way3),
    buildOption("d", way4)
  ]

  for (let i = 0; i < options.length; i++) {
    textArea.append(prefix(options[i], i + 1))
  }

}
