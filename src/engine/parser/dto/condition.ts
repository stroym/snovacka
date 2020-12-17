export default class ConditionDTO {

  nested!: Condition;

  constructor(condition: any) {
    Object.assign(this, condition);
  }

}

export class Condition {

  if!: Stage;
  elif?: Stage | Stage[];
  else?: Stage;

}

class Stage {

  content!: string; //string to render if this is true
  set?: string[]; //which values - if any - should be set if this block is true
  attributes?: ConditionAttributes;  //should contain pretty much only the condition... so another class for that

  nested?: Condition;

}

class ConditionAttributes {

  condi!: string;

}

//how will you match nested blocks if there's multiple of then? another tag?