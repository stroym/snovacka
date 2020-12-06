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
  //age, height, weight etc should probably be in its own small general thing
  attributes: Attributes  //for now a class is much easier to work with, but down the line this'll probably need to be an array,
  // especially if there's GUI generation - unless I can figure out how to make that work with a class
  // we'll see what happens once this thing actually does something
  descriptions: Descriptions;

  protected constructor(name: Name, archetype: Archetype, appearance: Appearance, attributes: Attributes) {
    this.name = name;
    this.archetype = archetype;
    this.appearance = appearance;
    this.attributes = attributes;
    this.descriptions = Descriptions.pickPronouns(archetype);
  }

}

//TODO reimplement NPC and PC classes, also make Character and LewdCharacter classes with both PC/NPC variations (so probably interfaces)
//TODO size etc. transition methods

export enum Archetype {

  //GENDERLESS
  MALE,
  CUNTBOY,
  FEMALE,
  DICKGIRL,
  FUTA

}