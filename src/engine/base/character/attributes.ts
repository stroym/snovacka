export default class Attributes {

}

export abstract class Attribute {

  static readonly DISPLAY: string;
  static readonly MIN = 0;
  static readonly MAX = 100;
  static readonly VALUES = class { //same thing as with the whole Attributes class
  };

}

export class Threshold {

  readonly DISPLAY: string;
  readonly VALUE: number;

  constructor(display: string, value: number) {
    this.DISPLAY = display;
    this.VALUE = value;
  }

}

// for example penis rating would consists of length and width (girth) rating... which I could reuse for all
// insertables and orifices
