import {Name} from "./name";
import {Descriptions} from "./descriptions";
import {Appearance} from "./body/appearance";

export abstract class Character {
  //TODO mental things missing: affection, dis/likes etc.

  name: Name;
  //_species: Species,
  archetype: Archetype;
  //details = likes/dislikes/sexual preferences etc. maybe age and some other stuff, but probably put that somewhere else
  appearance: Appearance;

  descriptions: Descriptions;

  //TODO attributes: Character.Attributes

  constructor(name: Name, archetype: Archetype, appearance: Appearance) {
    this.name = name;
    this.archetype = archetype;
    this.appearance = appearance;
    this.descriptions = Descriptions.pickPronouns(archetype);
  }

}

//TODO size etc. transition methods

export enum Archetype {

  //GENDERLESS
  MALE,
  CUNTBOY,
  FEMALE,
  DICKGIRL,
  FUTA

}