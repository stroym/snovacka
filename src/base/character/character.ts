import {Name} from "./name";
import {Archetype} from "./archetype";
import {Descriptions} from "./descriptions";
import {Body} from "./body";

export abstract class Character {
  //TODO mental things missing: affection, dis/likes etc.

  name: Name;
  //_species: Species,
  archetype: Archetype;
  body: Body;

  descriptions: Descriptions;

  //TODO attributes: Character.Attributes

  constructor(name: Name, archetype: Archetype, body: Body) {
    this.name = name;
    this.archetype = archetype;
    this.body = body;
    this.descriptions = Descriptions.pickPronouns(archetype);
  }
}

//TODO don't forget size check resolvers (ergo come up with some size ratings and set up logic x can/can't fit into y)

//TODO figure out how the hell modules/namespaces work with "inner" classes
