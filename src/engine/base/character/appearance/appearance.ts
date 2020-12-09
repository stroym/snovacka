import {Breasts}             from "./lewd/breasts";
import {Anus, Mouth, Vagina} from "./lewd/penetrable";
import {Penis}               from "./lewd/insertable";

export default class Appearance {

  //muscularity etc ratings?
  //TODO attachments/mods = tattoos, piercings, scars etc.
  //TODO body part descriptions (skin/fur/chitin/synth?), possibly lewd parts and their types
  //TODO upper/lower lewd things - concerns mainly x-taur lovelies

}

export class AppearanceLewd extends Appearance {

  breasts: Breasts;
  mouth: Mouth;
  anus: Anus;
  vagina?: Vagina;
  penis?: Penis;

  constructor(breasts: Breasts, mouth: Mouth, anus: Anus, vagina: Vagina, penis: Penis) {
    super();
    this.breasts = breasts;
    this.mouth = mouth;
    this.anus = anus;
    this.vagina = vagina;
    this.penis = penis;
  }

  //TODO something, something, butt enum probably (buttjob and other checks, I guess), merge with anus?
  //TODO transformations (just sex organs now, species... probably not ever, but we'll see just how far the lewd part variables will go)

  // public static makeMale(breasts: Breasts, mouth: Mouth, anus: Anus, penis: Penis) {
  //   return new AppearanceLewd(breasts, mouth, anus, undefined, penis);
  // }
  //
  // public static makeCuntboy(breasts: Breasts, mouth: Mouth, anus: Anus, vagina: Vagina) {
  //   return new AppearanceLewd(breasts, mouth, anus, vagina, undefined);
  // }
  //
  // public static makeFemale(breasts: Breasts, mouth: Mouth, anus: Anus, vagina: Vagina) {
  //   return new AppearanceLewd(breasts, mouth, anus, vagina, undefined);
  // }
  //
  // public static makeDickgirl(breasts: Breasts, mouth: Mouth, anus: Anus, penis: Penis) {
  //   return new AppearanceLewd(breasts, mouth, anus, undefined, penis);
  // }
  //
  // public static makeFuta(breasts: Breasts, mouth: Mouth, anus: Anus, vagina: Vagina, penis: Penis) {
  //   return new AppearanceLewd(breasts, mouth, anus, vagina, penis);
  // }

}