import {Name} from "../../../base/character/name";
import {body} from "../../../base/character/body";
import {Pc} from "../../../base/character/pc";
import {Archetype} from "../../../base/character/archetype";
import General = body.General;
import Breasts = body.Breasts;
import Orifice = body.Orifice;
import Body = body.Body;

export class PcAmalia extends Pc {

  constructor() {
    super(
      new Name("Amalia"),
      Archetype.FEMALE,
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