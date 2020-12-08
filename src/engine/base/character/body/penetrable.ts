import {Contents, Virgin} from "./appearance";

export class Capacity {

  depth: number;
  width: number;
  elasticity: number;   // - some threshold for determining when stretching has long-term effect is likely necessary; might wanna make a class for that
  recovery: number;     //how well an orifice can recover from stretching (ergo how much - if at all - will base capacity increase after stretching
  //tightness? maybe, I guess = calculated value, probably
  contents?: Contents;

  constructor(depth: number, width: number, elasticity: number, recovery: number) {
    this.depth = depth;
    this.width = width;
    this.elasticity = elasticity;
    this.recovery = recovery;
  }

}

export abstract class Penetrable implements Virgin {

  capacity: Capacity
  virginity: boolean;

  constructor(capacity: Capacity, virginity = true) {
    this.capacity = capacity;
    this.virginity = virginity;
  }

  //TODO methods to evaluate fits

}

export class Mouth extends Penetrable {

}

export class Anus extends Penetrable {

}

export class Vagina extends Penetrable {

}