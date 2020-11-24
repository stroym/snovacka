import {selection} from "./selection";

export class crossroads {

  private readonly _selections: selection[];

  constructor(selections?: selection[]) {
    if (selections) {
      this._selections = selections
    } else {
      this._selections = [];
    }
  }

  get selections(): selection[] {
    return this._selections;
  }

  public addSelection(sel: selection) {
    this._selections.push(sel);
  }

  public render() {

  }
}