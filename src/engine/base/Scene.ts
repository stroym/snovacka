import PlaceholderString, {SceneString} from "../parser/Parser";
import Conditional from "../parser/Conditional";

export default class Scene {

  readonly id: string;
  readonly prompt: string;
  readonly parents: Scene[] = new Array<Scene>();
  // readonly requirements?: Requirements; //check if option can even be selected + provide feedback about requirements
  //sections? = one scene could interactively ask for input and render more text depending on choice - this is slightly
  //different from a new scene
  readonly text: string | (() => string);
  readonly children: Scene[] = new Array<Scene>();

  /**
   *
   * @param id - unique identifier, mainly to make bug reports easier for both parties
   * @param prompt - text for the option that when selected will lead to this scene
   * @param parents - scenes that can access this scene
   * @param text - text to be rendered
   */
  constructor(id: string, prompt: string, text: string | (() => string), parents: Scene | Scene[]) { //| string
    this.id = id;
    this.prompt = prompt;
    this.text = text;

    if (Array.isArray(parents)) {
      parents.forEach(parent => {
        parent.addScene(this);
      });
    } else {
      parents.addScene(this);
    }
  }

  get render(): () => string {
    //don't postprocess if text is a function

    if (typeof this.text === "string") {
      let paragraphs = PlaceholderString.prepare(this.text);
      let replaced = PlaceholderString.parse(this.text); //TODO

      return () => replaced;
    } else {
      return this.text;
    }
  }

  addScene(scene: Scene) {
    this.children.push(scene);
  }

  addScenes(scenes: Scene[]) {
    this.children.concat(scenes);
  }

  //TODO
  static fromFile(file: string): Scene {
    return SceneString.parse(file);
  }

}

export class Paragraph {

  private readonly _content: string | Conditional;

  constructor(content: string | Conditional) {
    this._content = content;
  }

  get content(): string {
    return this._content instanceof Conditional ? this._content.evaluate() : this._content;
  }

  static fromParts(parts: string[]): Paragraph[] {
    let p = [];

    for (const part of parts) {
      if (part.includes("<condition>")) {
        p.push(new Paragraph(PlaceholderString.parse(part)));
      } else {
        p.push(new Paragraph(part));
      }
    }

    return p;
  }

}