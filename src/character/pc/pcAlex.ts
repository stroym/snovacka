import {Pc} from "../../base/character/pc";
import {Name} from "../../base/character/name";
import {character} from "../../base/character/character";
import {body} from "../../base/character/body";
import Body = body.Body;
import Breasts = body.Breasts;
import Orifice = body.Orifice;
import Penis = body.Penis;
import General = body.General;

export class PcAlex extends Pc {

  constructor() {
    super(
      new Name("Alex"),
      character.Archetype.MALE,
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