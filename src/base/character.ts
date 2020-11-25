export abstract class Character {

  private _pronouns: Character.Descriptions

  protected constructor(
    private _name: Character.Name,
    private _archetype: Character.Archetype,
    private _body: Character.Body,
    //TODO private _attributes: Character.Attributes
  ) {
    this._pronouns = Character.Descriptions.pickPronouns(_archetype)
  }

}

//TODO mental things missing: affection, dis/likes etc.

export namespace Character {

  export class Name {

    //TODO maybe add more nickname variations

    constructor(
      private readonly _firstName: string,
      private readonly _lastName?: string,
      private readonly _nickName?: string
    ) {
    }

  }

  export class Descriptions {

    private static masculine = new Descriptions("he", "him", "his")
    private static feminine = new Descriptions("she", "her", "hers")

    //TODO possibly split into subclasses if things pile up - pronouns, descriptions (man/woman, guy/gal etc.)

    constructor(
      private readonly _subjective: string,
      private readonly _objective: string,
      private readonly _possessive: string
    ) {
    }

    public static pickPronouns(archetype: Character.Archetype) {
      switch (archetype) {
        case Character.Archetype.MALE:
        case Character.Archetype.CUNTBOY:
          return Descriptions.masculine
        case Character.Archetype.FEMALE:
        case Character.Archetype.FUTA:
        case Character.Archetype.DICKGIRL:
          return Descriptions.feminine
        default:
          throw new Error("Invalid Character.Archetype value!") //this shouldn't happen, unless you're stupid
      }
    }

  }

  export class Body {

    constructor(
      private _height: number,
      private _weight: number,
      private _build: string, //TODO maybe more detailed body information?
      private _breasts: Character.Body.Breasts,
      private _mouth: Character.Body.Orifice, //TODO orifice should do fine, unless it doesn't
      private _anus: Character.Body.Orifice,
      private _vagina?: Character.Body.Orifice,
      private _penis?: Character.Body.Penis,
      private _balls?: Character.Body.Balls,
    ) {
    }

  }

  //TODO baseSize values are probably a good idea
  //TODO also don't forget size check resolvers (ergo come up with some size ratings and set up logic x can/can't fit into y)

  export namespace Body {

    abstract class Virgin {

      protected constructor(
        private _virginity: boolean
      ) {
      }

    }

    export class Orifice extends Virgin {

      constructor(
        virginity: boolean = true,
        private _depth: number = 0,
        private _width: number = 0,
        private _elasticity: number = 0,
        private _contents?: Orifice.Contents
      ) {
        super(virginity)
      }

    }

    export namespace Orifice {

      export class Contents {

        constructor(
          private _type: string,
          private _fullness: number
        ) {
        }

      }

    }

    export class Penis extends Virgin {

      constructor(
        virginity: boolean = true,
        private _length: number = 0,
        private _girth: number = 0,
        private _urethra: Orifice = new Orifice()
      ) {
        super(virginity);
      }
    }

    export class Balls {

      constructor(
        private _size: number = 0,
        private _fullness: number = 0
      ) {
      }

    }

    export class Breasts {

      constructor(
        private _cupSize: string = "",
        private _bandSize: number = 0,
        private _areolaSize: number = 0,
        private _nippleSize: number = 0,
        private _fuckableNipples: Orifice = new Orifice()
      ) {
      }

      //TODO make some reasonable defaults
      //TODO setup some quick types (flat, small, medium, big, badonkadonks...)

    }

    export namespace Breasts {

      export enum CupSize {

      }

    }

  }

  export enum Archetype {
    //TODO GENDERLESS? could happen, but probably not worth the mess until (if ever) it's needed
    MALE,
    FEMALE,
    FUTA,
    DICKGIRL,
    CUNTBOY
  }

}
