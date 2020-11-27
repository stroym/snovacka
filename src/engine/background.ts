import {options} from "./renderer";

export function resolveKeypress(e: KeyboardEvent) {
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