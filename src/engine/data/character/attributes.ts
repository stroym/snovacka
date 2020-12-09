import {Attribute, Threshold} from "../../base/character/attributes";

export class Muscularity extends Attribute {

  static readonly DISPLAY = "Muscularity";

  static readonly VALUES = class {
    static readonly SLOB = new Threshold("", 1);
    static readonly NORMAL = new Threshold("", 1);
    static readonly FIT = new Threshold("", 1);
    static readonly TONED = new Threshold("", 1);
    static readonly AMAZONIAN = new Threshold("", 1);
    static readonly BODYBUILDER = new Threshold("", 1);
  };

}

export class Shape extends Attribute {

  static readonly DISPLAY = "Shape";

  static readonly VALUES = class {
    static readonly NORMAl = new Threshold("", 1);
    static readonly THIN = new Threshold("", 1);
    static readonly THICK = new Threshold("", 1);
    static readonly CHUBBY = new Threshold("", 1);
    static readonly SLENDER = new Threshold("", 1);
  };

}