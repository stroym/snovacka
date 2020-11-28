import {Name} from "./name";
import {Appearance} from "./body/appearance";
import {Attributes} from "./attributes";
import {Descriptions} from "./descriptions";

export abstract class Character {

  name: Name;
  //_species: Species,
  archetype: Archetype;
  appearance: Appearance;
  //personality = likes/dislikes/sexual preferences etc.
  //age, height, weight etc in its own general info thing?
  attributes: Attributes
  descriptions: Descriptions;

  protected constructor(name: Name, archetype: Archetype, appearance: Appearance, attributes: Attributes) {
    this.name = name;
    this.archetype = archetype;
    this.appearance = appearance;
    this.attributes = attributes;
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