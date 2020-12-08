import {Name} from "../../../engine/base/character/name";
import {Appearance, General} from "../../../engine/base/character/body/appearance";
import {Anus, Capacity, Mouth, Vagina} from "../../../engine/base/character/body/penetrable";
import {Penis, Size, Urethra} from "../../../engine/base/character/body/insertable";
import {Breasts, CupSize, Nipples} from "../../../engine/base/character/body/breasts";
import {Archetype, Character} from "../../../engine/base/character/character";
import {Attributes} from "../../../engine/base/character/attributes";

export class NpcEliza extends Character {

  constructor() {
    super(
      new Name("Eliza"),
      Archetype.FUTA,
      Appearance.makeFuta(
        new General(
          192,
          81,
          "toned"
        ),
        new Breasts(
          CupSize.D,
          3,
          new Nipples(new Size(0, 0))
        ),
        new Mouth(new Capacity(0, 0, 0, 0)),
        new Anus(new Capacity(0, 0, 0, 0)),
        new Vagina(new Capacity(0, 0, 0, 0)),
        new Penis(0, 0, new Urethra(new Capacity(0, 0, 0, 0)))
      ),
      new Attributes()
    );
  }

}
