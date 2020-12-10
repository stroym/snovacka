import characters from "./data/character/characters";

export function getResources(path: string) {

}

export function postProcess(text: string): string {
  let matches = new Set(text.match(/(\${.*})/g));

  console.log(matches);

  for (let match of matches) {
    let parts = match.substring(2, match.length - 1).split(".");
    let character = characters.get(parts.shift() as string);

    if (character) {
      text = text.replaceAll(match, resolveProperty(character, parts));
    } else {
      //TODO more concrete error messages
      throw new Error("Character \"" + character + "\" not found in the characters array!");
    }
  }

  return text;
}

function resolveProperty(object: any, properties: string[]): string {
  let value = object;

  while (properties.length) {
    value = value[properties.shift()!];
  }

  return value;
}