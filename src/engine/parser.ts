import characters from "./data/characters";

export function postProcess(text: string): string {
  text = replacePlaceholders(text);

  return resolveConditionals(text);
}

enum Comparison {
  EQ = "==",
  NE = "!=",
  LT = "<",
  LE = "<=",
  GT = ">",
  GE = ">="
}

class Conditional {

  conditions: Condition[];

  constructor(str: string) {
    this.conditions = [];
  }

}

class Condition {

  type: Comparison;
  left: string;
  right: string;
  content: string;

  constructor(str: string) {
    this.type = Condition.resolveType(str);
    let conditional = Condition.verify(str.substring(3, str.indexOf(")")));
    this.left = conditional.substring(0, conditional.indexOf(this.type)).trim();
    this.right = conditional.substring(conditional.indexOf(this.type) + this.type.length, str.length).trim();
    this.content = str.substring(str.indexOf("{") + 1, str.indexOf("}"));
  }

  private static resolveType(relation: string): Comparison {
    switch (relation.match(/([=<>]+)/)![0]) {
      case Comparison.EQ:
        return Comparison.EQ;
      case Comparison.NE:
        return Comparison.NE;
      case Comparison.LT:
        return Comparison.LT;
      case Comparison.LE:
        return Comparison.LE;
      case Comparison.GT:
        return Comparison.GT;
      case Comparison.GE:
        return Comparison.GE;
      default:
        throw new Error("Invalid comparison value: " + relation + "!");
    }
  }

  private static verify(condition: string): string {
    if (condition.match(/([0-9]+[=<>]+[0-9]+)/) || condition.match(/([A-Za-z0-9]+[=<>]+[A-Za-z0-9]+)/)) {
      return condition;
    } else {
      throw new Error("Bad condition: " + condition + "!");
    }
  }

  compare() {
    switch (this.type) {
      case Comparison.EQ:
        return this.left === this.right;
      case Comparison.NE:
        return this.left !== this.right;
      case Comparison.LT:
        return this.left < this.right;
      case Comparison.LE:
        return this.left <= this.right;
      case Comparison.GT:
        return this.left > this.right;
      case Comparison.GE:
        return this.left >= this.right;
    }
  }

  resolve() {
    return this.compare() ? this.content : "";
  }

}

function resolveConditionals(text: string): string {
  let blocks = text.match(/(if\(.*\)\s*{\s*.*\s*})/g);

  if (blocks) {
    for (let block of blocks) {
      let condition = new Condition(block);

      console.log(condition);
      console.log(condition.compare());

      text = text.replace(block, condition.resolve());
    }
  }

  return text;
}

//limitations: as is, can only resolve character properties, which is mostly fine for now
//will probably have to be solved if there are more enums/depending on how the rating will exactly look like
//the most obvious way is to make another map and put all the things in there, but that's kind of annoying to deal with
//probably one map for enums and another one for ratings/anything else that comes up
function replacePlaceholders(text: string): string {
  let placeholders = new Set(text.match(/(\${.*})/g));

  console.log(placeholders);

  //TODO some fork for character attributes?
  for (let match of placeholders) {
    let obj = match.substring(2, match.indexOf("."));
    let props = match.substring(match.indexOf(".") + 1, match.length - 1).split(".");

    if (characters.has(obj)) {
      text = text.replaceAll(match, getProperty(characters.get(obj), props));
    } else {
      //TODO more concrete error messages
      throw new Error("Character \"" + obj + "\" not found in the characters array!");
    }
  }

  return text;
}

function getProperty(object: any, properties: string[]): string {
  let value = object;

  while (properties.length) {
    value = value[properties.shift()!];
  }

  return value;
}

function setProperty() {

}