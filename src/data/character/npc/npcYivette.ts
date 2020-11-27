import {Npc} from "../../../base/character/npc";
import {body} from "../../../base/character/body";
import {Name} from "../../../base/character/name";
import {Archetype} from "../../../base/character/archetype";
import Body = body.Body;
import General = body.General;
import Breasts = body.Breasts;
import Orifice = body.Orifice;
import Penis = body.Penis;

export class NpcYivette extends Npc {

  constructor() {
    super(
      new Name("Yivette"),
      Archetype.DICKGIRL,
      Body.makeFuta(
        new General(),
        new Breasts(),
        new Orifice(),
        new Orifice(),
        new Orifice(),
        new Penis()
      )
    )
  }

}