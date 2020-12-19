export class ConditionalDTO {

  if!: StageDTO;
  elif?: StageDTO | StageDTO[];
  else?: StageDTO;

}

export class StageDTO {

  condition!: string;
  content?: string;
  nested?: ConditionalDTO | ConditionalDTO[];
  set?: SetterDTO | SetterDTO[];

}

export class SetterDTO {

  key!: string;
  content!: string;

}