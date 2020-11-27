import {Npc} from "../../../base/character/npc";
import {Archetype} from "../../../base/character/archetype";
import {Body, Breasts, General, Orifice, Penis} from "../../../base/character/body";
import {Name} from "../../../base/character/name";

export class NpcYivette extends Npc {
  constructor() {
    super(
      new Name("Yivette"),
      Archetype.DICKGIRL,
      Body.makeFuta(new General(), new Breasts(), new Orifice(), new Orifice(), new Orifice(), new Penis())
    );
  }
}
