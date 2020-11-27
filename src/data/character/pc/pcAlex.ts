import {Pc} from "../../../base/character/pc";
import {Archetype} from "../../../base/character/archetype";
import {Body, Breasts, General, Orifice, Penis} from "../../../base/character/body";
import {Name} from "../../../base/character/name";

export class PcAlex extends Pc {
  constructor() {
    super(
      new Name("Alex"),
      Archetype.MALE,
      Body.makeMale(new General(), new Breasts(), new Orifice(), new Orifice(), new Penis())
    );
  }
}
