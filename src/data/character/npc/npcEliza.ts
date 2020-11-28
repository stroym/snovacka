import {Npc} from "../../../base/character/npc";
import {Name} from "../../../base/character/name";
import {Appearance, General} from "../../../base/character/body/appearance";
import {Anus, Mouth, Vagina} from "../../../base/character/body/penetrable";
import {Penis, Urethra} from "../../../base/character/body/insertable";
import {Breasts, CupSize, Nipples} from "../../../base/character/body/breasts";
import {Archetype} from "../../../base/character/character";
import {Attributes} from "../../../base/character/attributes";

export class NpcEliza extends Npc {

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
          new Nipples(0, 0, 0)
        ),
        new Mouth(0, 0, 0),
        new Anus(0, 0, 0),
        new Vagina(0, 0, 0),
        new Penis(0, 0, new Urethra(0, 0, 0))
      ),
      new Attributes()
    );
  }

}
