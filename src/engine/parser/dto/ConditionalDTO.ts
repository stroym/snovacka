export class ConditionalDTO {

  if!: StageDTO[];
  elif?: StageDTO[];
  else?: StageDTO[];

}

export class StageDTO {

  attributes!: StageAttributesDTO;
  content?: string;
  nested?: ConditionalDTO[];
  set?: SetterDTO[];

}

class StageAttributesDTO {

  condition!: string;

}

export class SetterDTO {

  attributes!: SetterAttributesDTO;
  content!: string;

}

class SetterAttributesDTO {

  key!: string;

}