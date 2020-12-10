/* eslint-disable no-eval */
import characters from "./data/character/characters";

export function getResources(path: string) {

}

export function postProcess(text: string): string {
  let matches = new Set(text.match(/(\${.*})/g));

  console.log(matches);

  if (matches) {
    for (let match of matches) {
      let charString = match.substring(2, match.indexOf("."));
      let propString = match.substring(match.indexOf(".") + 1, match.length - 1);

      let character = characters.get(charString);

      console.log(character);
      let evaluation = eval("`${character." + propString + "}`");

      text = text.replaceAll(match, evaluation);
      console.log(evaluation);
    }
  }

  return text;
}