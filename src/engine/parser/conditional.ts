import PlaceholderParser from "./parser";

export enum Comparison {
  EQ = "==",
  NE = "!=",
  LT = "<",
  LE = "<=",
  GT = ">",
  GE = ">="
}

export class Conditional {

  start?: number;
  end?: number;
  stage?: string; //enum IF/ELIF/ELSE
  raw: string;
  stages: Conditional[] = new Array<Conditional>();
  nested: Conditional[] = new Array<Conditional>();

  constructor(raw: string) {
    this.raw = raw;

    //iteratively handle first level conditionals, handle nested things in condition...
    //but you gotta count with the nesteds here, too - one way to get around that could be indentation checking...
    //or multiples of special characters
  }

  resolve(): string {
    return this.raw.replaceAll("<condition>", "").replaceAll("</condition>", "");
  }

  //split if into if, if else and else parts - nested ifs not expected
  //assume <condition> blocks are taken out
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
  nested: Condition[] = new Array<Condition>();
  parts: string[] = new Array<string>();
  // private readonly name: string;
  private readonly value: string;

  constructor(str: string) {
    this.name = str.substring(0, str.indexOf("("));

    if (this.name === "if" || this.name === "elif") {
      this.type = str.match(/([!=<>]+)/)![0].trim();
      this.value = str.substring(str.indexOf("(") + 1, str.indexOf("){")).trim();     //TODO this will only work for simple conditions... and normal parantheses will fuck it up
      let c = this.value.split(this.type);
      this.left = PlaceholderParser.parseGetsOnly(c[0].trim());
      this.right = PlaceholderParser.parseGetsOnly(c[1].trim());
    } else {
      this.type = "";
      this.value = "";
      this.left = "";
      this.right = "";
    }

    // this.content = str.substring(str.indexOf("){") + 2, str.lastIndexOf("}"));  //TODO this also needs to be more robust
    // this.content = str.substring(start + 2, findClosingParen(str, start + 2));

    let start = str.indexOf("){");
    let temp = str.substring(start + 1, str.length);

    this.content = str.substring(start + 2, findClosingParen(str, start + 1)).trim();

    while (temp.includes("{")) {
      let opening = temp.indexOf("{");
      let closing = findClosingParen(temp, opening);

      this.parts.push(temp.substring(opening + 1, closing - 1)); //push new condition - but move this into conditional, this is supposed to be for if/elif/else parts
      // not for the complete thing
      temp = temp.substring(closing + 1);
    }

    console.debug(this);

    for (let part of this.parts) {
      //check if part condition is true, if yes, search for nested, if not, skip

      if (part.includes("if(")) {
        console.debug(part);
        let nested = new Condition(part);
        this.nested.push(nested);
      }
    }

    // console.debug(this);
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
