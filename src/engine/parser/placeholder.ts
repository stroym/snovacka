abstract class Placeholder {

  protected readonly raw: string;
  protected readonly objectName: string;
  protected readonly properties: string[] = new Array<string>();

  protected constructor(raw: string, propertiesEnd: number) {
    let firstDot = raw.indexOf(".");
    this.raw = raw;
    this.objectName = raw.substring(2, firstDot);
    this.properties = raw.substring(firstDot + 1, propertiesEnd).split(".");
    //TODO check if it's faster to split here and work with an array or split the string on demand down the line
  }

  protected resolve(map: Map<string, any>): any {
    let mappedObject = map.get(this.objectName);

    let props = this.properties;
    let currentProp;

    while ((currentProp = props.shift())) {
      mappedObject = mappedObject[currentProp];
    }

    return mappedObject;
  }

}

export class GetterPlaceholder extends Placeholder {

  constructor(raw: string) {
    super(raw, raw.length - 1);
  }

  replace(map: Map<string, any>, text: string) {
    return text.replaceAll(this.raw, this.resolve(map));
  }

}

export class SetterPlaceholder extends Placeholder {

  private readonly value: string;
  private readonly lastProp: string;

  constructor(raw: string) {
    super(raw, raw.indexOf("="));
    this.value = raw.substring(raw.indexOf("=") + 1, raw.length - 1);
    this.lastProp = this.properties.pop()!;
  }

  update(map: Map<string, any>, text: string): string {
    this.resolve(map)[this.lastProp] = this.checkedValue();

    return text.replaceAll(this.raw, "");
  }

  private checkedValue(): boolean | number | string {
    let val = this.value.toLowerCase();

    if (Number(val)) {
      return Number(val);
    } else if (val === "true" || val === "false") {
      return (/true/i).test(val);
    } else {
      return val;
    }
  }
}

export function getPlaceholders(text: string, regex: RegExp, retype: any, onlyUnique = true): Array<any> {
  let matches = text.match(regex);

  if (matches) {
    if (onlyUnique) {
      return Array.from(new Set(matches).values()).map(retype);
    } else {
      return Array.from(matches).map(retype);
    }
  } else {
    return [];
  }
}