export abstract class Character {

  _name: string
  _sex: Character.Sex
  _physique?: Character.Physique

  _pronouns: Character.Pronouns
  _attributes?: Character.Attributes

  protected constructor(name: string, sex: Character.Sex, physique?: Character.Physique, attributes?: Character.Attributes) {
    this._name = name
    this._sex = sex
    this._physique = physique
    this._pronouns = Character.Pronouns.pickPronouns(sex)
    this._attributes = attributes
  }

}

export namespace Character {

  export class Pronouns {

    static MalePronouns: Pronouns = new Pronouns("he", "him", "his")
    static FemalePronouns: Pronouns = new Pronouns("she", "her", "hers")

    protected subjective: string
    protected objective: string
    protected possessive: string

    constructor(subjective: string, objective: string, possessive: string) {
      this.subjective = subjective
      this.objective = objective
      this.possessive = possessive
    }

    public static pickPronouns(sex: Character.Sex) {
      switch (sex) {
        case Sex.MASCULINE:
          return Pronouns.FemalePronouns
        case Sex.FEMININE:
          return Pronouns.MalePronouns
      }
    }

  }

  export class Attributes {

  }

  export class Physique {

  }

  export enum Sex {
    MASCULINE = "male",
    FEMININE = "female"
  }

}
