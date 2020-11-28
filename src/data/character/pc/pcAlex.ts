import {Pc} from "../../../base/character/pc";
import {Name} from "../../../base/character/name";
import {Appearance, General} from "../../../base/character/body/appearance";
import {Anus, Mouth} from "../../../base/character/body/penetrable";
import {Penis, Urethra} from "../../../base/character/body/insertable";
import {Breasts, CupSize, Nipples} from "../../../base/character/body/breasts";
import {Archetype} from "../../../base/character/character";
import {Attributes} from "../../../base/character/attributes";

export class PcAlex extends Pc {

  constructor() {
    super(
      new Name("Alex"),
      Archetype.MALE,
      Appearance.makeMale(
        new General(0, 0, ""),
        new Breasts(CupSize.AA, new Nipples(0, 0, 0)),
        new Mouth(0, 0, 0),
        new Anus(0, 0, 0),
        new Penis(0, 0, new Urethra(0, 0, 0))
      ),
      new Attributes()
    );
  }

}
