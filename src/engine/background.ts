import {optionsContainer} from "../index";

export function resolveKeypress(e: KeyboardEvent): void {
  //TODO switch between options on up/down +/- press?

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
