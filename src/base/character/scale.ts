export abstract class Scale {

  readonly min: number;
  readonly max: number;
  readonly thresholds: Threshold[];

  protected constructor(min: number, max: number, thresholds: Threshold[]) {
    this.min = min;
    this.max = max;
    this.thresholds = thresholds;
  }

}

export class Threshold {

  readonly display: string;
  readonly breakpoint: number;
  readonly description: string;

  constructor(display: string, breakpoint: number, description: string) {
    this.display = display;
    this.breakpoint = breakpoint;
    this.description = description;
  }

}

//this goes on characters
abstract class Rating {

  readonly name: string;
  readonly min: number;
  readonly max: number;
  current: number;

  constructor(name: string, min: number, max: number, current: number) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.current = current;
  }

  abstract resolve(): void;

}

export class Ratings {

}


export class MuscularityRating extends Rating {

  constructor(current: number) {
    super("musculature", 0, 100, current);
  }

  resolve(): void {
  }

}

export enum Muscularity {

  SLOB,
  NORMAL,
  FIT,
  TONED,
  AMAZONIAN,
  BODYBUILDER

}

// export class BodyShapeScale extends Scale {
//
//   static readonly NORMAl = new Threshold(1, "");
//   static readonly THIN = new Threshold(1, "");
//   static readonly THICK = new Threshold(1, "");
//   static readonly CHUBBY = new Threshold(1, "");
//   static readonly SLENDER = new Threshold(1, "");
//
//
//   constructor(min: number, max: number, thresholds: Threshold[]) {
//     super(min, max, thresholds);
//   }
//
// }
