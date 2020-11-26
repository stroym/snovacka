import {character} from "../../base/character/character";
import {Pc} from "../../base/character/pc";
import {body} from "../../base/character/body";
import {Name} from "../../base/character/name";
import Breasts = body.Breasts;
import Orifice = body.Orifice;
import General = body.General;
import Body = body.Body;

export class PcAmalia extends Pc {

  constructor() {
    super(
      new Name("Amalia"),
      character.Archetype.FEMALE,
      Body.makeFemale(
        new General(),
        new Breasts(),
        new Orifice(),
        new Orifice(),
        new Orifice()
      )
    )
  }

}