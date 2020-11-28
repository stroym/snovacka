import {Archetype, Character} from "./character";
import {Name} from "./name";
import {Appearance} from "./body/appearance";
import {AttributesPc} from "./attributes";

export class Pc extends Character {

  constructor(name: Name, archetype: Archetype, appearance: Appearance, attributes: AttributesPc) {
    super(name, archetype, appearance, attributes);
  }

}
