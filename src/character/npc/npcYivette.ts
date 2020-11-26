import {Npc} from "../../base/character/npc";
import {character} from "../../base/character/character";
import {Name} from "../../base/character/name";
import {body} from "../../base/character/body";
import Archetype = character.Archetype;
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