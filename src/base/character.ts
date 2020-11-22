export class Character {

  name: string;
  sex: Character.Sex;
  physique: Character.Physique;

  pronouns: Character.Pronouns;
  attributes: Character.Attributes;

  constructor(name: string, sex: Character.Sex, physique: Character.Physique, attributes: Character.Attributes) {
    this.name = name;
    this.sex = sex;
    this.physique = physique;
    this.pronouns = Character.Pronouns.pickPronouns(sex);
    this.attributes = attributes;
  }

}

export namespace Character {

  export class Pronouns {

    static MalePronouns: Pronouns = new Pronouns("he", "him", "his");
    static FemalePronouns: Pronouns = new Pronouns("she", "her", "hers");

    protected subjective: string;
    protected objective: string;
    protected possessive: string;

    public static pickPronouns(sex: Character.Sex) {
      switch (sex) {
        case Sex.F:
        case Sex.IF:
          return Pronouns.FemalePronouns;
        case Sex.M:
        case Sex.IM:
          return Pronouns.MalePronouns;
      }
    }

    constructor(subjective: string, objective: string, possessive: string) {
      this.subjective = subjective;
      this.objective = objective;
      this.possessive = possessive;
    }

  }

  export class Attributes {

  }

  export class Physique {

  }

  export enum Sex {
    F = "female",
    M = "male",
    IF = "intersex-feminine",
    IM = "intersex-masculine"
  }

}
