//TODO we'll see how useful this gets... at very least it could facilitate generating personality/appearance texts
//beyond that good for making random characters, but that's not snovacka's intended use case (at least not right now)
import {Archetype} from "./character";

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

  static pickPronouns(archetype: Archetype): Descriptions {
    switch (archetype) {
      case Archetype.MALE:
      case Archetype.CUNTBOY:
        return Descriptions.masculine;
      case Archetype.FEMALE:
      case Archetype.FUTA:
      case Archetype.DICKGIRL:
        return Descriptions.feminine;
      default:
        throw new Error("Invalid Character.Archetype value!"); //this shouldn't happen, unless you're stupid
    }
  }

}

export interface Describeable {

  description: string;

}