abstract class Placeholder {

  raw: string;
  objectName: string;
  properties: string[] = new Array<string>();

  protected constructor(raw: string, propertiesEnd: number) {
    let firstDot = raw.indexOf(".");
    this.raw = raw;
    this.objectName = raw.substring(2, firstDot);
    this.properties = raw.substring(firstDot + 1, propertiesEnd).split(".");
  }

  protected resolveField(mappedObject: any): string {
    let temp = mappedObject;

    while (this.properties.length) {
      temp = temp[this.properties.shift()!];
    }

    return temp;
  }

}

export class GetterPlaceholder extends Placeholder {

  constructor(raw: string) {
    super(raw, raw.length - 1);
  }

  replace(map: Map<string, any>, text: string) {
    let mappedObject = map.get(this.objectName);

    console.log(mappedObject);
    if (mappedObject) {

      let temp = mappedObject;

      while (this.properties.length) {
        temp = temp[this.properties.shift()!];
      }

      return text.replaceAll(this.raw, temp);
    } else {
      throw new Error("Map \"" + this.raw + "\" not found in the characters array!");
    }
  }

}

export class SetterPlaceholder extends Placeholder {

  value: string;

  constructor(raw: string) {
    super(raw, raw.indexOf("="));
    this.value = raw.substring(raw.indexOf("=") + 1, raw.length - 1);
  }

  update(map: any, text: string): string {
    let mappedObject = map.get(this.objectName);

    if (mappedObject) {
      mappedObject[this.resolveField(mappedObject)] = this.value;
      return text.replaceAll(this.raw, "");
    } else {
      throw new Error("Map \"" + this.raw + "\" not found in the characters array!");
    }
  }

}

export function getGetterPlaceholders(text: string, regex: RegExp): Array<GetterPlaceholder> {
  const retype = (value: string) => {
    return new GetterPlaceholder(value);
  };

  return getPlaceholders(text, regex, retype,);
}

export function getSetterPlaceholders(text: string, regex: RegExp): Array<SetterPlaceholder> {
  const retype = (value: string) => {
    return new SetterPlaceholder(value);
  };

  return getPlaceholders(text, regex, retype, false);
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