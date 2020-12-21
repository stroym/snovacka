import characters from "../data/Characters";
import {getPlaceholders, GetterPlaceholder, SetterPlaceholder} from "./Placeholder";
import {parseString} from "xml2js";
import Scene, {Paragraph} from "../base/Scene";
import {intro} from "../data/Scenes";
import Conditional from "./Conditional";

export class Patterns {

  static placeholder = /(\${[0-9A-Za-z.]+})/;

  static placeholderGet = new RegExp(Patterns.placeholder, "g");
  static placeholderSet = /(\${[0-9A-Za-z.]+\s*=\s*[0-9A-Za-z]+})/g;

  static value = new RegExp(`([0-9A-Za-z]|${Patterns.placeholder.source})`);
  static eq = /\s*(!=|==|>|>=|<|<=)\s*/;

  static attributeLazy = /(<([a-z])>[\s\S]+?<(\/\2)>)/g;
  static attribute = /(<([a-z])>[\s\S]+<(\/\2)>)/g;
  static head = /(<head>[\s\S]+?<\/head>)/;
  static condition = /(<condition>[\s\S]+?<\/condition>\n\n)/g;

}

export default class PlaceholderString {

  text: string;

  constructor(text: string) {
    this.text = text;
  }

  static prepare(text: string): Paragraph[] {
    return [];
  }

  static parse(text: string): string {
    return new PlaceholderString(text)
      .resolveConditionals()
      .resolveSets()
      .resolveGets()
      .text;
  }

  static parseGetsOnly(text: string): string {
    return new PlaceholderString(text).resolveGets().text;
  }

  static parseSetsOnly(text: string): string {
    return new PlaceholderString(text).resolveSets().text;
  }

  //TODO probably move to scenestring
  private resolveConditionals(): PlaceholderString {
    let blocks = this.text.match(Patterns.condition);
    let paragraphs = new Array<Paragraph>();

    if (blocks) {
      for (let block of blocks) {
        if (block.includes("<condition>")) {
          parseString(block, {
            trim: true,
            attrkey: "attributes",
            charkey: "content",
            explicitCharkey: true,
            tagNameProcessors: [renameNested],
            attrNameProcessors: [renameAttributeAliases],
            explicitRoot: false
          }, function (err, result) {
            paragraphs.push(new Paragraph(new Conditional(result)));
          });
        } else {
          paragraphs.push(new Paragraph(block));
        }
      }
    }

    // console.log(paragraphs);

    let stringy = "";

    paragraphs.forEach(block => {
      stringy += block.content + "\n\n";
    });

    this.text = stringy;
    return this;
  }

  private resolveSets(): PlaceholderString {
    let placeholders = getPlaceholders(this.text, Patterns.placeholderSet, (value: string) => {
      return new SetterPlaceholder(value);
    });

    // console.debug(placeholders);

    placeholders.forEach(p => {
      this.text = p.update(characters, this.text);
    });

    return this;
  }

  private resolveGets(): PlaceholderString {
    let placeholders = getPlaceholders(this.text, Patterns.placeholderGet, (value: string) => {
      return new GetterPlaceholder(value);
    });

    // console.debug(placeholders);

    placeholders.forEach(p => {
      this.text = p.replace(characters, this.text);
    });

    return this;
  }

}

export class SceneString {

  static parse(text: string): Scene {
    let [empty, head, rest] = text.split(Patterns.head);
    let paragraphs = Paragraph.fromParts(rest.split(Patterns.condition));

    console.log(empty, head, rest);
    return new Scene("", "", "", intro);
  }

}

function renameAttributeAliases(name: string) {
  if (name === "c") {
    return "condition";
  } else if (name === "k") {
    return "key";
  } else {
    return name;
  }
}

function renameNested(name: string) {
  if (name === "condition") {
    return "nested";
  } else {
    return name;
  }
}