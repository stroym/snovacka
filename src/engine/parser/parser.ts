import characters from "../data/characters";
import {getPlaceholders, GetterPlaceholder, SetterPlaceholder} from "./placeholder";
import {Conditional} from "./conditional";

export class Patterns {

  static placeholderGet = /(\$[{][0-9A-Za-z.]+[}])/g;
  static placeholderSet = /(\$[{][0-9A-Za-z.]+\s*=\s*[0-9A-Za-z.]+[}])/g;

  static value = /([0-9A-Za-z]|\${[0-9A-Za-z.]+})/;
  static eq = /\s*(!=|==|>|>=|<|<=)\s*/;
  static condition = new RegExp(
    /\bif\b\(/.source + Patterns.value.source + Patterns.eq.source + Patterns.value.source + /\)/.source
    + /[{]\s*.*\s*[}]/.source, "g"
  );

  static attribute = /(<([a-z]+)>[\s\S]+<\/\2+>)/g;
  static conditionBlock = /(<(condition)>[\s\S]+?<\/(condition)>)/g;

  ///(\bif\b|\belif\b|\belse\b)/ - complex conditions starts
}

export default class PlaceholderParser extends String {

  static parse(text: string) {
    // console.log(text.match(Patterns.attribute));
    // console.log(text.split("\n\n")); - good after initial processing for sequential rendering

    return new PlaceholderParser(text)
      .resolveConditionals()
      // .resolvePlaceholderSets()
      // .resolvePlaceholderGets()
      .valueOf();
  }

  static parseGetsOnly(text: string) {
    return new PlaceholderParser(text)
      .resolvePlaceholderGets()
      .valueOf();
  }

  private resolvePlaceholderSets(): PlaceholderParser {
    let temp = this.valueOf();
    let placeholders = getPlaceholders(temp, Patterns.placeholderSet, (value: string) => {
      return new SetterPlaceholder(value);
    });

    console.debug(placeholders);

    placeholders.forEach(p => {
      temp = p.update(characters, temp);
    });

    return new PlaceholderParser(temp);
  }

  private resolvePlaceholderGets(): PlaceholderParser {
    let temp = this.valueOf();
    let placeholders = getPlaceholders(temp, Patterns.placeholderGet, (value: string) => {
      return new GetterPlaceholder(value);
    });

    console.debug(placeholders);

    placeholders.forEach(p => {
      temp = p.replace(characters, temp);
    });

    return new PlaceholderParser(temp);
  }

  private resolveConditionals(): PlaceholderParser {
    let temp = this.valueOf();
    let blocks = temp.match(Patterns.conditionBlock);

    console.debug(blocks);

    if (blocks) {
      for (let block of blocks) {
        let conditional = new Conditional(block);

        // temp = temp.replace(block, condition.resolve());
      }
    }

    return new PlaceholderParser(temp);
  }

  // private resolveConditionals(): PlaceholderParser {
  //   let temp = this.valueOf();
  //   let blocks = temp.match(Patterns.condition);
  //
  //   console.debug(blocks);
  //
  //   if (blocks) {
  //     for (let block of blocks) {
  //       let condition = new Condition(block);
  //       temp = temp.replace(block, condition.resolve());
  //     }
  //   }
  //
  //   return new PlaceholderParser(temp);
  // }

}