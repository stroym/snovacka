import PlaceholderParser from "../parser/parser";

export default class Scene {

  readonly id: string;
  readonly prompt: string;
  //different from a new scene
  readonly parents: Scene[] = new Array<Scene>();
  // readonly requirements?: Requirements; //check if option can even be selected + provide feedback about requirements
  //sections? = one scene could interactively ask for input and render more text depending on choice - this is slightly
  private readonly _text: string | (() => string);
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
    this._text = text;

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

  get text(): () => string {
    //don't postprocess if text is a function
    return typeof this._text === "string" ? () => PlaceholderParser.parse(this._text as string) : this._text;
  }

}