import PlaceholderParser from "../parser";

export enum Comparison {
  EQ = "==",
  NE = "!=",
  LT = "<",
  LE = "<=",
  GT = ">",
  GE = ">="
}

export class Conditional {

  conditions: Condition[] = new Array<Condition>();

  constructor(str: string) {

  }

  resolve(): string {
    for (let condition of this.conditions) {
      if (condition.compare()) {
        return condition.resolve();
      }

    }
    return "";
  }

  private split(str: string) {
    // if () {}
    // else if() {}
    // else {}
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
    console.log(this.left);
    console.log(this.right);
    console.log(this.content);
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

  resolve() {
    let result = this.compare();
    console.debug(this.value + " → " + this.resolvedValue() + " → " + result);

    if (result) {
      return PlaceholderParser.parse(this.content);
    } else {
      return "";
    }
  }

}