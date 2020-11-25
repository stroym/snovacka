import {Character} from "../base/character"
import Name = Character.Name;
import Body = Character.Body;
import Breasts = Character.Body.Breasts;
import Orifice = Character.Body.Orifice;
import Penis = Character.Body.Penis;
import Balls = Character.Body.Balls;

export class pcAlex extends Character {

  constructor() {
    super(
      new Name("Alex"),
      Character.Archetype.MALE,
      new Body(
        175,
        66,
        "",
        new Breasts(),
        new Orifice(),
        new Orifice(),
        undefined,
        new Penis(),
        new Balls()
      )
    )
  }

}