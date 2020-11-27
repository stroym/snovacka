import {Name} from "../../../base/character/name";
import {body} from "../../../base/character/body";
import {Npc} from "../../../base/character/npc";
import {Archetype} from "../../../base/character/archetype";
import General = body.General;
import Breasts = body.Breasts;
import Orifice = body.Orifice;
import Penis = body.Penis;
import Body = body.Body;

export class NpcKara extends Npc {

  constructor() {
    super(
      new Name("Kara"),
      Archetype.DICKGIRL,
      Body.makeDickgirl(
        new General(),
        new Breasts(),
        new Orifice(),
        new Orifice(),
        new Penis()
      )
    )
  }

}