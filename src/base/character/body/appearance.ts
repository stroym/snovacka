import {Anus, Mouth, Vagina} from "./orifice";
import {Penis} from "./penis";
import {Breasts} from "./breasts";

export class Appearance {

  general: General;
  //TODO attachments/mods = tattoos, piercings, scars etc.
  //TODO general body description (skin/fur/chitin/synth?), body parts? given there's x-taurs, probably
  breasts: Breasts;
  mouth: Mouth;
  anus: Anus;
  vagina?: Vagina;
  penis?: Penis;

  //TODO something, something, butt enum probably (buttjob and other checks, I guess), merge with anus?
  //TODO transformations (just sex organs now, species... probably not ever, but we'll see just how far the body part variables will go)

  constructor(general: General, breasts: Breasts, mouth: Mouth, anus: Anus, vagina?: Vagina, penis?: Penis) {
    this.general = general;
    this.breasts = breasts;
    this.mouth = mouth;
    this.anus = anus;
    this.vagina = vagina;
    this.penis = penis;
  }

  public static makeMale(general: General, breasts: Breasts, mouth: Mouth, anus: Anus, penis: Penis) {
    return new Appearance(general, breasts, mouth, anus, undefined, penis);
  }

  public static makeCuntboy(general: General, breasts: Breasts, mouth: Mouth, anus: Anus, vagina: Vagina) {
    return new Appearance(general, breasts, mouth, anus, vagina, undefined);
  }

  public static makeFemale(general: General, breasts: Breasts, mouth: Mouth, anus: Anus, vagina: Vagina) {
    return new Appearance(general, breasts, mouth, anus, vagina, undefined);
  }

  public static makeDickgirl(general: General, breasts: Breasts, mouth: Mouth, anus: Anus, penis: Penis) {
    return new Appearance(general, breasts, mouth, anus, undefined, penis);
  }

  public static makeFuta(general: General, breasts: Breasts, mouth: Mouth, anus: Anus, vagina: Vagina, penis: Penis) {
    return new Appearance(general, breasts, mouth, anus, vagina, penis);
  }

}

export class General {
  //TODO maybe more detailed body information?
  //TODO move its own things, if it grows (or maybe it'll get merged with things

  height: number;
  weight: number;
  build: string;

  //body ratings for musculature, fat etc.

  constructor(height: number, weight: number, build: string) {
    this.height = height;
    this.weight = weight;
    this.build = build;
  }

}

export interface Virgin {

  virginity: boolean;

}

export interface Size {

  length: number;
  width: number;

}