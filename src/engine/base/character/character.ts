import Attributes from "./attributes";
import Appearance from "./appearance/appearance";
import Personal from "./personal";

abstract class Character<A extends Appearance> {

  //initial state to track changes just for fun?

  name: Name;
  personal: Personal;
  appearance: A;
  attributes: Attributes;  //for now a class is much easier to work with, but down the line this'll probably need to
  // be an array,
  // especially if there's GUI generation - unless I can figure out how to make that work with a class
  // we'll see what happens once this thing actually does something

  constructor(name: Name, personal: Personal, appearance: A, attributes: Attributes) {
    this.name = name;
    this.personal = personal;
    this.appearance = appearance;
    this.attributes = attributes;
  }

}

export class NonPlayableCharacter<A extends Appearance> extends Character<A> {

  //TODO further split down to dateable and just background?

}

export class PlayableCharacter<A extends Appearance> extends Character<A> {

  //location, current scene/progress etc?

}

export class Name {

  readonly firstName: string;
  readonly lastName?: string;
  readonly nickName?: string;

  constructor(firstName: string, lastName?: string, nickName?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
  }

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

}

export enum Archetype {

  //GENDERLESS + descriptions ofc.
  MALE,
  CUNTBOY,
  FEMALE,
  DICKGIRL,
  FUTA

}

export class Descriptions {

  private static masculine = new Descriptions("he", "him", "his");
  private static feminine = new Descriptions("she", "her", "hers");

  readonly subjective: string;
  readonly objective: string;
  readonly possessive: string;

  constructor(subjective: string, objective: string, possessive: string) {
    this.subjective = subjective;
    this.objective = objective;
    this.possessive = possessive;
  }

  static pick(archetype: Archetype): Descriptions {
    switch (archetype) {
      case Archetype.MALE:
      case Archetype.CUNTBOY:
        return Descriptions.masculine;
      case Archetype.FEMALE:
      case Archetype.FUTA:
      case Archetype.DICKGIRL:
        return Descriptions.feminine;
      default:
        throw new Error("Invalid Character.Archetype value!"); //this should absolutely never happen
    }
  }

}

//TODO should be useful to fetch and/or splice together descriptions of... pretty much anything
export interface Describable {

  readonly description: string;     //a wall of text

}

export interface DescribableSingular {

  readonly singular: string;        //human

  readonly subjectiveS: string;      //human/humans      | I
  readonly objectiveS: string;       //human/humans      | me
  readonly possessiveS: string;      //human's/humans'   | mine

}

export interface DescribablePlural {

  readonly plural: string;          //humans

  readonly subjectiveP: string;      //human/humans      | I
  readonly objectiveP: string;       //human/humans      | me
  readonly possessiveP: string;      //human's/humans'   | mine
}

