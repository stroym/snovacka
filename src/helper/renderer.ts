import {textArea} from "../main";

export function render(text: string) {
  textArea.innerHTML = text
}

export function renderAdditive(text: string) {
  textArea.innerHTML += text
}

export function buildOption(prompt: string, target: any) {
  let a = document.createElement('a')
  a.textContent = prompt
  a.href = "javascript:;"

  a.addEventListener("click", target)

  return a
}

export function prefix(a: any, order: number) {
  a.textContent = order + ": " + a.textContent
  a.order = order

  return a
}