import {Archetype, Descriptions} from "./character";

export default class Personal {

  archetype: Archetype;
  age: number;
  height: number;
  weight: number;
  //_species: Species,
  //personality = likes/dislikes/sexual preferences etc.
  descriptions: Descriptions;

  constructor(archetype: Archetype, age: number, height: number, weight: number) {
    this.archetype = archetype;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.descriptions = Descriptions.pickPronouns(archetype);
  }

}