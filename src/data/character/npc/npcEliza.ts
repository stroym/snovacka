import {Npc} from "../../../base/character/npc";
import {Name} from "../../../base/character/name";
import {Appearance, General} from "../../../base/character/body/appearance";
import {Anus, Mouth, Vagina} from "../../../base/character/body/orifice";
import {Penis} from "../../../base/character/body/penis";
import {Breasts} from "../../../base/character/body/breasts";
import {Archetype} from "../../../base/character/character";


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
        new Breasts(),
        new Mouth(),
        new Anus(),
        new Vagina(),
        new Penis()
      )
    );
  }

}
