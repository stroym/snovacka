import PlaceholderParser from "./parser";

export enum Comparison {
  EQ = "==",
  NE = "!=",
  LT = "<",
  LE = "<=",
  GT = ">",
  GE = ">="
}

const condi = /(if\(|ef\(|el\()/;

export class Conditional {

  raw: string;
  stages: Condition[] = new Array<Condition>();

  constructor(raw: string) {
    this.raw = raw;

    let temp = raw;
    let blockStart = temp.match(condi);

    while (blockStart != null) {
      let opening = temp.indexOf("{");
      let closing = findClosingParen(temp, opening);

      this.stages.push(new Condition(temp.substring(blockStart.index!, closing)));
      temp = temp.substring(closing + 1);
      blockStart = temp.match(condi);
    }
  }

  resolve(): string {
    return this.raw.replaceAll("<condition>", "").replaceAll("</condition>", "");
  }

  private split(str: string) {
    // get if (){
    // find next }
    // check for if else/else
    // find closing } if if else/else found
  }

}

//TODO complex conditions (&&, ||, () priority) & negation?
//TODO nested conditions

export class Condition {

  name: string; //enum/isX methods?
  private readonly type: string;
  private readonly left: string;
  private readonly right: string;
  private readonly content: string;
  private readonly nested: Conditional[] = new Array<Conditional>();
  // private readonly name: string;
  private readonly value: string;

  constructor(raw: string) {
    this.name = raw.substring(0, 2);

    let blockStart = raw.indexOf("){");

    if (this.name === "if" || this.name === "ef") {
      this.type = raw.match(/([!=<>]+)/)![0].trim();
      this.value = raw.substring(raw.indexOf("(") + 1, blockStart).trim();     //TODO this will only work for simple conditions... and normal parantheses will fuck it up
      let c = this.value.split(this.type);
      this.left = PlaceholderParser.parseGetsOnly(c[0].trim());
      this.right = PlaceholderParser.parseGetsOnly(c[1].trim());
    } else {
      this.type = "";
      this.value = "";
      this.left = "";
      this.right = "";
    }

    this.content = raw.substring(blockStart + 2, raw.length - 1).trim();

    let nested = this.content.indexOf("if(");

    //add while to handle multiple nested ifs of the same level
    if (nested > 0) {
      this.nested.push(new Conditional(this.content));
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

  resolvedValue(): string {
    return this.left + this.type + this.right;
  }

  resolve(): string {
    let result = this.compare();
    console.debug(this.value + " → " + this.resolvedValue() + " → " + result);

    if (result) {
      return PlaceholderParser.parse(this.content);
    } else {
      return "";
    }
  }

}

function findClosingParen(text: string, openPos: number) {
  let closePos = openPos;
  let counter = 1;

  while (counter > 0) {
    let c = text[++closePos];

    if (c === "{") {
      counter++;
    } else if (c === "}") {
      counter--;
    }
  }
  return closePos;
}
