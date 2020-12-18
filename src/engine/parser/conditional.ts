import PlaceholderParser from "./parser";

export default class Conditional {

  readonly if: Stage;
  readonly elif?: Stage[];
  readonly else?: Stage;

  constructor(dto: any) {
    this.if = new ConditionalStage(dto.if);
    this.elif = Object.assign(Array<ConditionalStage>(), dto.elif);
    this.else = new Stage(dto.else);
    console.debug(this);
  }

  evaluate() {

  }

}

class Stage {

  nested?: Conditional[]; //nested conditions
  protected readonly content: string; //string to render if this is true
  protected readonly set: Setter[] = new Array<Setter>(); //which values - if any - should be set if this block is true

  constructor(dto: any) {
    this.content = dto.content;
    this.set = Object.assign(Array<Setter>(), dto.set);
    this.nested = dto.condition;
  }

  resolve(): string {
    return PlaceholderParser.parse(this.content);
  }

}

class ConditionalStage extends Stage {

  private readonly condition: Condition;  //the condition statement

  constructor(dto: any) {
    super(dto);
    this.condition = new Condition(dto.attributes.condition);
  }

  resolve(): string {
    let result = this.condition.compare();
    console.debug(this.condition.compare + " → " + this.condition.resolvedValue() + " → " + result);

    if (result) {
      return PlaceholderParser.parse(this.content);
    } else {
      return "";
    }
  }

}

export enum Comparison {
  EQ = "==",
  NE = "!=",
  LT = "<",
  LE = "<=",
  GT = ">",
  GE = ">="
}

//TODO complex conditions (&&, ||, () priority) & negation?
//TODO nested conditions
class Condition {

  private readonly raw: string;
  private readonly type: string;
  private readonly left: string;
  private readonly right: string;

  constructor(raw: string) {
    this.raw = raw;
    this.type = raw.match(/([!=<>]+)/)![0].trim();
    let c = raw.split(this.type);
    this.left = PlaceholderParser.parseGetsOnly(c[0].trim());
    this.right = PlaceholderParser.parseGetsOnly(c[1].trim());
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

}

class Setter {

  target: string;
  value: string;

  constructor(target: string, value: string) {
    this.target = target;
    this.value = value;
  }

}