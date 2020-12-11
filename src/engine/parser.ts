import characters from "./data/characters";
import {getGetterPlaceholders, getSetterPlaceholders} from "./parser/placeholder";
import {Condition} from "./parser/conditional";

export default class PlaceholderParser extends String {

  static getterPattern = /(\${[0-9A-Za-z.]+[}])/g;
  static setterPattern = /(\${[0-9A-Za-z.]+\s*=\s*[0-9A-Za-z.]+[}])/g;
  static conditionPattern = /(if\([0-9A-Za-z.]+\s*(!=|==|>|>=|<|<=)\s*[0-9A-Za-z.]+\)\s*{\s*.*\s*[}])/g;

  static parse(text: string) {
    //TODO conditions should be first, for obvious reasons... but then they'll have to call sets and gets internally
    // there might be some issues with additive rendering (if that's ever a thing) but I'll worry about that later
    return new PlaceholderParser(text)
      .resolvePlaceholderSets()
      .resolvePlaceholderGets()
      .resolveConditionals()
      .valueOf();
  }

  private resolvePlaceholderSets(): PlaceholderParser {
    let temp = this.valueOf();

    getSetterPlaceholders(temp, PlaceholderParser.setterPattern).forEach(p => {
      temp = p.update(characters, temp);
    });

    return new PlaceholderParser(temp);
  }

  private resolvePlaceholderGets(): PlaceholderParser {
    let temp = this.valueOf();

    //as is, it can only resolve character placeholders and it relies on a map to do that; not ideal, but I doubt there's a better way
    getGetterPlaceholders(temp, PlaceholderParser.getterPattern).forEach(p => {
      temp = p.replace(characters, temp);
    });

    return new PlaceholderParser(temp);
  }

  private resolveConditionals(): PlaceholderParser {
    let temp = this.valueOf();
    let blocks = temp.match(PlaceholderParser.conditionPattern);

    if (blocks) {
      for (let block of blocks) {
        let condition = new Condition(block);
        temp = temp.replace(block, condition.resolve());
      }
    }

    return new PlaceholderParser(temp);
  }

}