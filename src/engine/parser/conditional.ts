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

  private readonly value: string;
  private readonly type: string;
  private readonly left: string;
  private readonly right: string;
  private readonly content: string;

  constructor(str: string) {
    this.type = str.match(/([!=<>]+)/)![0];
    this.value = str.substring(str.indexOf("(") + 1, str.lastIndexOf(")"));     //TODO this will only work for simple conditions... and normal parantheses will fuck it up
    let c = this.value.split(this.type);
    this.left = PlaceholderParser.parseGetsOnly(c[0].trim());
    this.right = PlaceholderParser.parseGetsOnly(c[1].trim());

    this.content = str.substring(str.indexOf("){") + 2, str.lastIndexOf("}"));  //TODO this also needs to be more robust
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