import {character} from "./character";
import Archetype = character.Archetype;

export class Descriptions {

  private static masculine = new Descriptions("he", "him", "his")
  private static feminine = new Descriptions("she", "her", "hers")

  constructor(
    private readonly _subjective: string,
    private readonly _objective: string,
    private readonly _possessive: string
  ) {
  }

  public static pickPronouns(archetype: Archetype) {
    switch (archetype) {
      case Archetype.MALE:
      case Archetype.CUNTBOY:
        return Descriptions.masculine
      case Archetype.FEMALE:
      case Archetype.FUTA:
      case Archetype.DICKGIRL:
        return Descriptions.feminine
      default:
        throw new Error("Invalid Character.Archetype value!") //this shouldn't happen, unless you're stupid
    }
  }

}
