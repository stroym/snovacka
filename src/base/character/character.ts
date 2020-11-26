//TODO mental things missing: affection, dis/likes etc.
import {Descriptions} from "./descriptions";
import {Name} from "./name";
import {body} from "./body";
import Body = body.Body;

export module character {

  export abstract class Character {

    private _descriptions: Descriptions

    protected constructor(
      private _name: Name,
      // private _species: Species,
      private _archetype: Archetype,
      private _body: Body
      //TODO private _attributes: Character.Attributes
    ) {
      this._descriptions = Descriptions.pickPronouns(_archetype)
    }

  }

  export enum Archetype {
    //GENDERLESS
    MALE,
    CUNTBOY,
    FEMALE,
    DICKGIRL,
    FUTA
  }

  //TODO don't forget size check resolvers (ergo come up with some size ratings and set up logic x can/can't fit into y)

}