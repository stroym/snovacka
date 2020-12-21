import {Contents, Penetrable, Virgin} from "./Penetrable";

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
  virgin: boolean;

  protected constructor(length: number, width: number, virgin: boolean) {
    this.size = new Size(length, width);
    this.virgin = virgin;
  }

}

export class Penis extends Insertable {

  urethra: Urethra;
  balls?: Balls;

  constructor(length: number, width: number, urethra: Urethra, balls?: Balls, virgin = true) {
    super(length, width, virgin);
    this.urethra = urethra;
    this.balls = balls;
  }

}

export class PenisKnotted extends Penis {

  knot: Knot;

  constructor(length: number, width: number, urethra: Urethra, knot: Knot, balls?: Balls, virgin?: boolean) {
    super(length, width, urethra, balls, virgin);
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

class Toy extends Insertable { //kinda iffy with the virgin, but eh

}

class Tail extends Insertable {

}