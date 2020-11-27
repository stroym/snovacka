export module body {

  export class Body {

    general: General
    breasts: Breasts
    mouth: Orifice
    anus: Orifice
    vagina?: Orifice
    penis?: Penis

    constructor(general: body.General, breasts: body.Breasts, mouth: body.Orifice, anus: body.Orifice, vagina?: body.Orifice, penis?: body.Penis) {
      this.general = general;
      this.breasts = breasts;
      this.mouth = mouth;
      this.anus = anus;
      this.vagina = vagina;
      this.penis = penis;
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

    height: number = 0
    weight: number = 0
    build: string = ""

    constructor(height: number = 0, weight: number = 0, build: string = "") {
      this.height = height;
      this.weight = weight;
      this.build = build;
    }

  }

  abstract class Virgin {

    virginity: boolean

    protected constructor(virginity: boolean) {
      this.virginity = virginity;
    }

  }

  class Capacity {

    //TODO this should probably go everywhere...

  }

  export class Contents {

    type: string
    amount: number

    constructor(type: string, amount: number) {
      this.type = type;
      this.amount = amount;
    }

  }

  export class Orifice extends Virgin {

    depth: number
    width: number
    elasticity: number
    contents?: Contents

    constructor(virginity: boolean = true, depth: number = 0, width: number = 0, elasticity: number = 0, contents?: body.Contents) {
      super(virginity);
      this.depth = depth;
      this.width = width;
      this.elasticity = elasticity;
      this.contents = contents;
    }

  }

  export class Penis extends Virgin {

    virginity: boolean
    length: number
    girth: number
    urethra: Orifice
    balls?: Balls

    constructor(virginity: boolean = true, length: number = 0, girth: number = 0, urethra: body.Orifice = new Orifice(), balls?: body.Balls) {
      super(virginity);
      this.virginity = virginity;
      this.length = length;
      this.girth = girth;
      this.urethra = urethra;
      this.balls = balls;
    }

  }

  export class Balls {

    size: number = 0
    contents?: Contents

    constructor(size: number = 0, contents?: body.Contents) {
      this.size = size;
      this.contents = contents;
    }

  }

  export class Breasts {

    cupSize: string
    bandSize: number
    areolaSize: number
    nippleSize: number
    fuckableNipples?: Orifice

    constructor(cupSize: string = "", bandSize: number = 0, areolaSize: number = 0, nippleSize: number = 0, fuckableNipples?: body.Orifice) {
      this.cupSize = cupSize;
      this.bandSize = bandSize;
      this.areolaSize = areolaSize;
      this.nippleSize = nippleSize;
      this.fuckableNipples = fuckableNipples;
    }

    //TODO make some reasonable defaults
    //TODO setup some quick types (flat, small, medium, big, badonkadonks...)

  }

}
