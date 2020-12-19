import PlaceholderString from "./parser";
import {ConditionalDTO, SetterDTO, StageDTO} from "./dto/ConditionalDTO";

export default class Conditional {

  readonly if: ConditionalStage;
  readonly elif: ConditionalStage[] = new Array<ConditionalStage>();
  readonly else?: Stage;

  constructor(dto: ConditionalDTO) {
    this.if = new ConditionalStage(dto.if);

    if (dto.elif) {
      if (Array.isArray(dto.elif)) {
        dto.elif?.forEach(elif => {
          this.elif.push(new ConditionalStage(elif));
        });
      } else {
        this.elif.push(new ConditionalStage(dto.elif));
      }
    }

    this.else = dto.else ? new Stage(dto.else) : undefined;
  }

  evaluate(): string {
    if (this.if.check()) {
      return this.if.resolve();
    } else if (this.elif) {
      for (let elif of this.elif) {
        if (elif.check()) {
          return elif.resolve();
        }
      }
    }

    if (this.else) {
      return this.else.resolve();
    } else {
      return "";
    }
  }

}

class Stage {

  protected readonly content: string; //string to render if this is true
  protected readonly nested: Conditional[] = new Array<Conditional>(); //nested conditions
  protected readonly set: Setter[] = new Array<Setter>(); //which values - if any - should be set if this block is true

  constructor(dto: StageDTO) {
    this.content = dto.content ? dto.content : "";

    if (dto.nested) {
      if (Array.isArray(dto.nested)) {
        dto.nested?.forEach(nested => {
          this.nested.push(new Conditional(nested));
        });
      } else {
        this.nested.push(new Conditional(dto.nested));
      }
    }

    if (dto.set) {
      if (Array.isArray(dto.set)) {
        dto.set?.forEach(nested => {
          this.set.push(new Setter(nested));
        });
      } else {
        this.set.push(new Setter(dto.set));
      }
    }
  }

  resolve(): string {
    let parts = [this.content];

    if (this.nested) {
      this.nested.forEach(nested => {
        parts.push(nested.evaluate());
      });
    }

    return parts.join("\n\n").trim();
  }

}

class ConditionalStage extends Stage {

  private readonly condition: Condition;  //the condition statement

  constructor(dto: StageDTO) {
    super(dto);
    this.condition = new Condition(dto.condition);
  }

  check(): boolean {
    let result = this.condition.compare();

    console.debug("→ " + result); //TODO re/move

    return this.condition.compare();
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
class Condition {

  private readonly raw: string;

  constructor(raw: string) {
    this.raw = raw;
  }

  compare(): boolean {
    let type = this.raw.match(/([!=<>]+)/)![0].trim();
    let c = this.raw.split(type);
    let left = PlaceholderString.parseGetsOnly(c[0].trim());
    let right = PlaceholderString.parseGetsOnly(c[1].trim());

    console.debug(this.raw + " → " + left + " " + type + " " + right);

    switch (type) {
      case Comparison.EQ:
        return left === right;
      case Comparison.NE:
        return left !== right;
      case Comparison.LT:
        return left < right;
      case Comparison.LE:
        return left <= right;
      case Comparison.GT:
        return left > right;
      case Comparison.GE:
        return left >= right;
      default:
        throw Error("Statement " + this.raw + " could not be resolved!");
    }
  }

}

export class Setter {

  target: string;
  value: string;

  constructor(dto: SetterDTO) {
    this.target = dto.key;
    this.value = dto.content;
  }

  set(): void {
  }

}
