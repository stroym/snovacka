import PlaceholderString from "../parser/parser";
import Conditional from "../parser/conditional";

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
  constructor(id: string, prompt: string, text: string | (() => string), parents: Scene | Scene[]) {
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

  addScene(scene: Scene) {
    this.children.push(scene);
  }

  addScenes(scenes: Scene[]) {
    this.children.concat(scenes);
  }

  get render(): () => string {
    //don't postprocess if text is a function

    if (typeof this.text === "string") {
      let paragraphs = PlaceholderString.prepare(this.text);
      let replaced = PlaceholderString.parse(this.text); //TODO

      return () => replaced.text;
    } else {
      return this.text;
    }
  }

}

export class Paragraph {

  private _content: string;
  condition?: Conditional;

  constructor(content: string, condition?: Conditional) {
    this._content = content;
    this.condition = condition;
  }

  get content(): string {
    if (this.condition) {
      this._content = this.condition.evaluate();
    }

    return this._content;
  }

  static fromConditional(dto: any): Paragraph {
    return new Paragraph("", new Conditional(dto));
  }

}