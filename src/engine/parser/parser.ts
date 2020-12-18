import characters from "../data/characters";
import {getPlaceholders, GetterPlaceholder, SetterPlaceholder} from "./placeholder";
import {parseString} from "xml2js";
import Conditional from "./conditional";
import {Block} from "../base/scene";

export class Patterns {

  static placeholder = /(\${[0-9A-Za-z.]+})/;

  static placeholderGet = new RegExp(Patterns.placeholder, "g");
  static placeholderSet = /(\${[0-9A-Za-z.]+\s*=\s*[0-9A-Za-z]+})/g;

  static value = new RegExp(`([0-9A-Za-z]|${Patterns.placeholder.source})`);
  static eq = /\s*(!=|==|>|>=|<|<=)\s*/;

  static attributeLazy = /(<([a-z])>[\s\S]+?<(\/\2)>)/g;
  static attribute = /(<([a-z])>[\s\S]+<(\/\2)>)/g;
  static condition = /(<condition>[\s\S]+?<\/condition>\n\n)/g;

  // static condition = new RegExp(
  //   /\bif\b\(/.source + Patterns.value.source + Patterns.eq.source + Patterns.value.source + /\)/.source
  //   + /[{]\s*.*\s*[}]/.source, "g"
  // );

}

export default class PlaceholderParser extends String {

  static prepare(text: string): Block[] {
    return [];
  }

  static parse(text: string) {
    return new PlaceholderParser(text)
      .resolveAttributes();
    // .resolveSets()
    // .resolveGets();
  }

  static parseGetsOnly(text: string) {
    return new PlaceholderParser(text).resolveGets();
  }

  private resolveAttributes(): string {
    let temp = this.valueOf();
    let blocks = temp.match(Patterns.condition);
    let parsed = new Array<Block>();

    if (blocks) {
      // filter attributes to process each type separately
      for (let block of blocks) {

        // console.debug(block);

        if (block.includes("<condition>")) {
          parseString(temp, {
            trim: true,
            attrkey: "attributes",
            charkey: "content",
            explicitCharkey: true,
            explicitArray: false
          }, function (err, result) {
            parsed.push(Block.fromConditional(new Conditional(result.condition)));
          });
        } else {
          parsed.push(new Block(block));
        }
      }
    }

    // console.debug(parsed);

    return temp;
  }

  private resolveSets(): string {
    let temp = this.valueOf();
    let placeholders = getPlaceholders(temp, Patterns.placeholderSet, (value: string) => {
      return new SetterPlaceholder(value);
    });

    console.debug(placeholders);

    placeholders.forEach(p => {
      temp = p.update(characters, temp);
    });

    return temp;
  }

  private resolveGets(): string {
    let temp = this.valueOf();
    let placeholders = getPlaceholders(temp, Patterns.placeholderGet, (value: string) => {
      return new GetterPlaceholder(value);
    });

    // console.debug(placeholders);

    placeholders.forEach(p => {
      temp = p.replace(characters, temp);
    });

    return temp;
  }

}

function findClosingParen(text: string, openPos: number) {
  let closePos = openPos;
  let counter = 1;

  while (counter > 0) {
    let c = text[++closePos];

    if (c === "{") {
      counter++;
    } else if (c === "}") {
      counter--;
    }
  }
  return closePos;
}

class Attribute {

  name: string; //enum/isX methods?
  content: string;
  nested: Attribute[] = new Array<Attribute>();
  parts: string[] = new Array<string>();

  //array/map for content and children tags - but you need to keep track of their order

  constructor(str: string) {
    this.name = str.substring(str.indexOf("<") + 1, str.indexOf(">")).trim();
    this.content = str.substring(str.indexOf(">") + 1, str.lastIndexOf("</")).trim();

    this.findChildren();
  }

  //this works when there's no same-tag nesting happening... which shouldn't happend in attributes
  findChildren(): string[] {
    let temp = this.content.match(Patterns.attribute);

    if (temp) {
      for (let attribute of temp) {
        this.nested.push(new Attribute(attribute));
      }
    }

    return temp ? temp : [];
  }

  toString(): string {
    return this.name + "\n" + this.nested;
  }

}