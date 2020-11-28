import {Size, Virgin} from "./appearance";
import {Contents, Penetrable} from "./penetrable";

abstract class Insertable implements Virgin, Size {

  virginity: boolean;
  length: number;
  width: number;

  protected constructor(virginity: boolean, length: number, width: number) {
    this.virginity = virginity;
    this.length = length;
    this.width = width;
  }

}

export class Penis extends Insertable {

  urethra: Urethra;
  balls?: Balls;

  constructor(length: number, width: number, urethra: Urethra, balls?: Balls, virginity = true) {
    super(virginity, length, width);
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

export class Balls implements Size {

  width: number;
  length: number;
  contents?: Contents;

  constructor(width: number, length: number, contents: Contents) {
    this.width = width;
    this.length = length;
    this.contents = contents;
  }

}

class Toy extends Insertable {

}

class Tail extends Insertable {

}