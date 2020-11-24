import {textArea} from "./main"

export function render(text: string) {
  textArea.innerHTML = text
}

export function renderAdditive(text: string) {
  textArea.innerHTML += text
}
