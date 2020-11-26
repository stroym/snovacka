import {character} from "./character/character";
import Character = character.Character;

export abstract class Scene {

  private readonly _id: number = 0
  private readonly _prompt: string = ""

  private readonly _children: Scene[] = []
  private readonly _participants: Character[] = []

  // constructor(id: number, prompt: string) {
  //
  // }

  get id(): number {
    return this._id
  }

  get prompt(): string {
    return this._prompt
  }

  get children(): Scene[] {
    return this._children
  }

  get participants(): Character[] {
    return this._participants
  }

  public abstract render(): string

  public transition(n: number): Scene {
    return this._children[n - 1]
  }

  public addChild(child: Scene, prompt: string) {
    this._children.push(child)
  }

}
