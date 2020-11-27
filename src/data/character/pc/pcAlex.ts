import {Pc} from "../../../base/character/pc";
import {Name} from "../../../base/character/name";
import {Appearance, General} from "../../../base/character/body/appearance";
import {Anus, Mouth} from "../../../base/character/body/orifice";
import {Penis} from "../../../base/character/body/penis";
import {Breasts} from "../../../base/character/body/breasts";
import {Archetype} from "../../../base/character/character";

export class PcAlex extends Pc {

  constructor() {
    super(
      new Name("Alex"),
      Archetype.MALE,
      Appearance.makeMale(
        new General(),
        new Breasts(),
        new Mouth(),
        new Anus(),
        new Penis())
    );
  }

}
