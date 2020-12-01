import {Name} from "../../../base/character/name";
import {Appearance, General} from "../../../base/character/body/appearance";
import {Anus, Capacity, Mouth} from "../../../base/character/body/penetrable";
import {Penis, Size, Urethra} from "../../../base/character/body/insertable";
import {Breasts, CupSize, Nipples} from "../../../base/character/body/breasts";
import {Archetype, Character} from "../../../base/character/character";
import {Attributes} from "../../../base/character/attributes";

export class PcAlex extends Character {

  constructor() {
    super(
      new Name("Alex"),
      Archetype.MALE,
      Appearance.makeMale(
        new General(0, 0, ""),
        new Breasts(CupSize.AA, 2, new Nipples(new Size(0, 0))),
        new Mouth(new Capacity(0, 0, 0, 0)),
        new Anus(new Capacity(0, 0, 0, 0)),
        new Penis(0, 0, new Urethra(new Capacity(0, 0, 0, 0)))
      ),
      new Attributes()
    );
  }

}
