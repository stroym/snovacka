export module body {

  export class Body {

    constructor(
      private _general: General,
      private _breasts: Breasts,
      private _mouth: Orifice,
      private _anus: Orifice,
      private _vagina?: Orifice,
      private _penis?: Penis
    ) {
    }

    public static makeMale(general: General, breasts: Breasts, mouth: Orifice, anus: Orifice, penis: Penis) {
      return new Body(general, breasts, mouth, anus, undefined, penis)
    }

    public static makeCuntboy(general: General, breasts: Breasts, mouth: Orifice, anus: Orifice, vagina: Orifice) {
      return new Body(general, breasts, mouth, anus, vagina, undefined)
    }

    public static makeFemale(general: General, breasts: Breasts, mouth: Orifice, anus: Orifice, vagina: Orifice) {
      return new Body(general, breasts, mouth, anus, vagina, undefined)
    }

    public static makeDickgirl(general: General, breasts: Breasts, mouth: Orifice, anus: Orifice, penis: Penis) {
      return new Body(general, breasts, mouth, anus, undefined, penis)
    }

    public static makeFuta(general: General, breasts: Breasts, mouth: Orifice, anus: Orifice, vagina: Orifice, penis: Penis) {
      return new Body(general, breasts, mouth, anus, vagina, penis)
    }

  }

  export class General {
    //TODO maybe more detailed body information?

    constructor(
      private _height: number = 0,
      private _weight: number = 0,
      private _build: string = ""
    ) {
    }

  }

  abstract class Virgin {

    protected constructor(
      private _virginity: boolean
    ) {
    }

  }

  class Capacity {

    //TODO this should probably go everywhere...

  }

  export class Contents {

    constructor(
      private _type: string,
      private _amount: number
    ) {
    }

  }

  export class Orifice extends Virgin {

    constructor(
      virginity: boolean = true,
      private _depth: number = 0,
      private _width: number = 0,
      private _elasticity: number = 0,
      private _contents?: Contents
    ) {
      super(virginity)
    }

  }

  export class Penis extends Virgin {

    constructor(
      virginity: boolean = true,
      private _length: number = 0,
      private _girth: number = 0,
      private _urethra: Orifice = new Orifice(),
      private _balls?: Balls
    ) {
      super(virginity);
    }
  }

  export class Balls {

    constructor(
      private _size: number = 0,
      private _contents?: Contents
    ) {
    }

  }

  export class Breasts {

    constructor(
      private _cupSize: string = "",
      private _bandSize: number = 0,
      private _areolaSize: number = 0,
      private _nippleSize: number = 0,
      private _fuckableNipples?: Orifice
    ) {
    }

    //TODO make some reasonable defaults
    //TODO setup some quick types (flat, small, medium, big, badonkadonks...)

  }

}
