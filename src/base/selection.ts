import {render} from "../renderer";

export class selection {

  private readonly _order: number;
  private readonly _prompt: string;

  constructor(order: number, prompt: string) {
    this._order = order;
    this._prompt = prompt;
  }

  get order(): number {
    return this._order;
  }

  get prompt(): string {
    return this._prompt;
  }

  static buildOption(order: number, prompt: string) {
    return new selection(order, prompt);
  }

  public render() {
    return "<a href='javascript:;' onclick='way1();'>" + this._order + ": " + this.prompt + "</a>"
  }

}

export function way1() {
  render("Shine!")
}
