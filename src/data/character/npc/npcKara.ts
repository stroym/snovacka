import {Name} from "../../../base/character/name";
import {Body, Breasts, General, Orifice, Penis} from "../../../base/character/body";
import {Npc} from "../../../base/character/npc";
import {Archetype} from "../../../base/character/archetype";

export class NpcKara extends Npc {
  constructor() {
    super(
      new Name("Kara"),
      Archetype.DICKGIRL,
      Body.makeDickgirl(new General(), new Breasts(), new Orifice(), new Orifice(), new Penis())
    );
  }
}
