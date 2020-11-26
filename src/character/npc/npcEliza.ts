import {Npc} from "../../base/character/npc";
import {character} from "../../base/character/character";
import {body} from "../../base/character/body";
import {Name} from "../../base/character/name";
import Archetype = character.Archetype;
import Penis = body.Penis;
import Breasts = body.Breasts;
import Orifice = body.Orifice;
import General = body.General;
import Body = body.Body;

export class NpcEliza extends Npc {

  constructor() {
    super(
      new Name("Eliza"),
      Archetype.FUTA,
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