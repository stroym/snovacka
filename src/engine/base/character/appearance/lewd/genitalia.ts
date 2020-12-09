import {Vagina} from "./penetrable";
import {Penis}  from "./insertable";

//TODO this is probably the way to handle characters' "equipment" properly - multiples are definitely possible...
// (actually the same goes for a lot of things: hands, heads, legs, boobs, eyes...)
export class Genitalia {

  penis: Penis[] = new Array<Penis>();
  vagina: Vagina[] = new Array<Vagina>();

  constructor(penis: Penis[], vagina: Vagina[]) {
    this.penis = penis;
    this.vagina = vagina;
  }

}