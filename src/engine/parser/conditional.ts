import PlaceholderParser from "./parser";
import {Setter} from "./placeholderXML";

export class ConditionalDTO {

  if!: ConditionalStageDTO;
  elif?: ConditionalStageDTO[];
  else?: StageDTO;

}

class StageDTO {

  content?: string;
  nested?: ConditionalDTO[];
  set?: Setter[];

}

class ConditionalStageDTO extends StageDTO {

  condition!: string;

}

export default class Conditional {

  readonly if: ConditionalStage;
  readonly elif: ConditionalStage[] = new Array<ConditionalStage>();
  readonly else?: Stage;

  constructor(dto: ConditionalDTO) {
    this.if = new ConditionalStage(dto.if);

    dto.elif?.forEach(elif => {
      this.elif.push(new ConditionalStage(elif));
    });

    this.else = dto.else ? new Stage(dto.else) : undefined;
  }

  evaluate(): string {
    if (this.if) {
      return this.if.resolve();
    } else if (this.elif) {
      this.elif.forEach(elif => {
        return elif.resolve();
      });
    }

    if (this.else) {
      return this.else.resolve();
    } else {
      //TODO possibly return undefined?
      return ""; //no condition was true and no else is present
    }
  }

}

class Stage {

  protected readonly content: string; //string to render if this is true
  protected readonly nested: Conditional[] = new Array<Conditional>(); //nested conditions
  protected readonly set: Setter[] = new Array<Setter>(); //which values - if any - should be set if this block is true

  constructor(dto: StageDTO) {
    this.content = dto.content ? dto.content : "";

    dto.nested?.forEach(nest => {
      this.nested.push(new Conditional(nest));
    });

    if (dto.set) {
      this.set = dto.set;
    }
  }

  resolve(): string {
    let text = this.content;

    if (this.nested) {
      this.nested.forEach(nested => {
        text += nested.evaluate() + "\n\n";
      });
    }

    return PlaceholderParser.parse(text);
  }

}

class ConditionalStage extends Stage {

  private readonly condition: Condition;  //the condition statement

  constructor(dto: ConditionalStageDTO) {
    super(dto);
    this.condition = new Condition(dto.condition);
  }

  resolve(): string {
    let result = this.condition.compare();

    console.debug("→ " + result);

    return result ? PlaceholderParser.parse(this.content) : "";
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
    let left = PlaceholderParser.parseGetsOnly(c[0].trim());
    let right = PlaceholderParser.parseGetsOnly(c[1].trim());

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
        //TODO throw exception?
        console.warn("Statement " + this.raw + " could not be resolved! Returning false...");
        return false;
    }
  }

}