export interface Virgin {

  virginity: boolean;

}

export class Contents {

  type: string;
  current: number;
  capacity: number;

  /**
   * Meant for liquids, but can also be used for solids such as eggs.
   *
   * @param type - type of "filling"
   * @param amount  - current amount stored in ml
   * @param capacity - maximum amount that can be stored in ml
   */
  constructor(type: string, amount: number, capacity: number) {
    this.type = type;
    this.current = amount;
    this.capacity = capacity;
  }

}

export class Capacity {

  depth: number;
  width: number;
  elasticity: number;   // - some threshold for determining when stretching has long-term effect is likely necessary;
  // might wanna make a class for that
  recovery: number;     //how well an orifice can recover from stretching (ergo how much - if at all - will base
  // capacity increase after stretching
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

  capacity: Capacity;
  virginity: boolean;

  constructor(capacity: Capacity, virginity = true) {
    this.capacity = capacity;
    this.virginity = virginity;
  }

  //TODO methods to evaluate fits, same goes for insertables

}

export class Mouth extends Penetrable {

}

export class Anus extends Penetrable {

}

export class Vagina extends Penetrable {

}