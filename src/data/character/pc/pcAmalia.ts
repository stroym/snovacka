import {Name} from "../../../base/character/name";
import {Pc} from "../../../base/character/pc";
import {Archetype} from "../../../base/character/archetype";
import {Body, Breasts, General, Orifice} from "../../../base/character/body";

export class PcAmalia extends Pc {
  constructor() {
    super(
      new Name("Amalia"),
      Archetype.FEMALE,
      Body.makeFemale(new General(), new Breasts(), new Orifice(), new Orifice(), new Orifice())
    );
  }
}
