import {Npc} from "../../../base/character/npc";
import {Archetype} from "../../../base/character/archetype";
import {Body, Breasts, General, Orifice, Penis} from "../../../base/character/body";
import {Name} from "../../../base/character/name";

export class NpcLillien extends Npc {
  constructor() {
    super(
      new Name("Lillien"),
      Archetype.DICKGIRL,
      Body.makeDickgirl(new General(), new Breasts(), new Orifice(), new Orifice(), new Penis())
    );
  }
}
