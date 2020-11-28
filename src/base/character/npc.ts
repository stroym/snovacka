import {Archetype, Character} from "./character";
import {Name} from "./name";
import {Appearance} from "./body/appearance";
import {AttributesNpc} from "./attributes";

export class Npc extends Character {

  constructor(name: Name, archetype: Archetype, appearance: Appearance, attributes: AttributesNpc) {
    super(name, archetype, appearance, attributes);
  }

}
