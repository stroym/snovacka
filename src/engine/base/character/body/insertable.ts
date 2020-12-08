import {Contents, Virgin} from "./appearance";
import {Penetrable} from "./penetrable";

export class Size {

  length: number;
  width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

}

export abstract class Insertable implements Virgin {

  size: Size;
  virginity: boolean;

  protected constructor(length: number, width: number, virginity: boolean) {
    this.size = new Size(length, width);
    this.virginity = virginity;
  }

}

export class Penis extends Insertable {

  urethra: Urethra;
  balls?: Balls;

  constructor(length: number, width: number, urethra: Urethra, balls?: Balls, virginity = true) {
    super(length, width, virginity);
    this.urethra = urethra;
    this.balls = balls;
  }

}

export class PenisKnotted extends Penis {

  knot: Knot;

  constructor(length: number, width: number, urethra: Urethra, knot: Knot, balls?: Balls, virginity?: boolean) {
    super(length, width, urethra, balls, virginity);
    this.knot = knot;
  }

}

export class Knot extends Penetrable {

}

export class Urethra extends Penetrable {

}

export class Balls {

  size: Size;
  contents?: Contents;

  constructor(size: Size, contents?: Contents) {
    this.size = size;
    this.contents = contents;
  }

}

class Toy extends Insertable { //kinda iffy with the virginity, but eh

}

class Tail extends Insertable {

}