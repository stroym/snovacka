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

export class Condition {

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