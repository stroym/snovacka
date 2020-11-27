import {Size, Virgin} from "./appearance";
import {Contents, Orifice} from "./orifice";

export class Penis implements Virgin, Size {

  virginity: boolean;
  length: number;
  width: number;
  urethra: Urethra;
  balls?: Balls;

  constructor(length: number, width: number, urethra: Urethra, balls?: Balls, virginity = true) {
    this.length = length;
    this.width = width;
    this.virginity = virginity;
    this.urethra = urethra;
    this.balls = balls;
  }

}

export class Urethra extends Orifice {

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