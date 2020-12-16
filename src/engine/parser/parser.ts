import characters from "../data/characters";
import {getPlaceholders, GetterPlaceholder, SetterPlaceholder} from "./placeholder";
import {Condition} from "./conditional";

export class Patterns {

  static placeholder = /(\${[0-9A-Za-z.]+})/;

  static placeholderGet = new RegExp(Patterns.placeholder, "g");
  static placeholderSet = /(\${[0-9A-Za-z.]+\s*=\s*[0-9A-Za-z]+})/g;

  static value = new RegExp(`([0-9A-Za-z]|${Patterns.placeholder.source})`);
  static eq = /\s*(!=|==|>|>=|<|<=)\s*/;

  static attributeLazy = /(<([a-z]+)>[\s\S]+?<(\/\2+)>)/g;
  static attribute = /(<([a-z]+)>[\s\S]+<(\/\2+)>)/g;

  static condition = new RegExp(
    /\bif\b\(/.source + Patterns.value.source + Patterns.eq.source + Patterns.value.source + /\)/.source
    + /[{]\s*.*\s*[}]/.source, "g"
  );

}

export default class PlaceholderParser extends String {

  static parse(text: string) {
    // console.log(text.split("\n\n")); - good after initial processing for sequential rendering maybe

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
    // let attributes = temp.match(Patterns.condition);

    let parsed = [];
    // if (attributes) {
    //filter attributes to process each type separately
    // for (let attribute of attributes) {

    parsed.push(new Condition(temp));

    // if (attribute.includes("<condition>")) {

    //try to resolve nested conditions without using special tags for it

    // temp = temp.replace(attribute, new Condition(attribute).resolve());
    // }
    // }

    // console.debug(parsed);
    // }

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