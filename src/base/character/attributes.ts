export class Attributes {

  //string: number + resolvers

}

export class AttributesNpc extends Attributes {

}

export class AttributesPc extends Attributes {

}

abstract class Attribute {

  static readonly DISPLAY: string;
  static readonly MIN = 0;
  static readonly MAX = 100;
  static readonly VALUES = class {
  };

}

export class Threshold {

  readonly DISPLAY: string;
  readonly VALUE: number;

  constructor(display: string, value: number) {
    this.DISPLAY = display;
    this.VALUE = value;
  }

}

//template
// export class Impl extends Attribute {
//
//   static readonly DISPLAY = "";
//   static readonly MIN = 0;
//   static readonly MAX = 0;
//
//   static readonly VALUES = class {
//     static readonly SLOB = new Threshold("", 0);
//   }
//
// }

export class Muscularity extends Attribute {

  static readonly DISPLAY = "Muscularity"

  static readonly VALUES = class {
    static readonly SLOB = new Threshold("", 1);
    static readonly NORMAL = new Threshold("", 1);
    static readonly FIT = new Threshold("", 1);
    static readonly TONED = new Threshold("", 1);
    static readonly AMAZONIAN = new Threshold("", 1);
    static readonly BODYBUILDER = new Threshold("", 1);
  }

}

export class Shape extends Attribute {

  static readonly DISPLAY = "Shape"

  static readonly VALUES = class {
    static readonly NORMAl = new Threshold("", 1);
    static readonly THIN = new Threshold("", 1);
    static readonly THICK = new Threshold("", 1);
    static readonly CHUBBY = new Threshold("", 1);
    static readonly SLENDER = new Threshold("", 1);
  }

}

// //for example penis rating would consists of length and width (girth) rating... which I could reuse for all insertables and orifices
