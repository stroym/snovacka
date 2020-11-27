import {Pc} from "../../../base/character/pc";
import {body} from "../../../base/character/body";
import {Name} from "../../../base/character/name";
import {Archetype} from "../../../base/character/archetype";
import Body = body.Body;
import General = body.General;
import Breasts = body.Breasts;
import Orifice = body.Orifice;
import Penis = body.Penis;

export class PcAlex extends Pc {

  constructor() {
    super(
      new Name("Alex"),
      Archetype.MALE,
      Body.makeMale(
        new General(),
        new Breasts(),
        new Orifice(),
        new Orifice(),
        new Penis()
      )
    )
  }

}