import {Archetype, Descriptions} from "./Character";

export default class Personal {

  //TODO probably? add some helpers around gender things (manual descriptions, gender in addition to archetype)
  archetype: Archetype;
  age: number;
  height: number;
  weight: number;
  //species: Species,
  //personality = likes/dislikes/sexual preferences etc.
  descriptions: Descriptions;

  constructor(archetype: Archetype, age: number, height: number, weight: number) {
    this.archetype = archetype;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.descriptions = Descriptions.pick(archetype);
  }

}