export default class Scene {

  readonly id: string;
  readonly prompt: string;
  readonly text: () => string;
  readonly parents: Scene[];
  readonly children: Scene[];

  /**
   *
   * @param id - unique identifier, mainly to make bug reports easier for both parties
   * @param prompt - text for the option that when selected will lead to this scene
   * @param parents - scenes that can access this scene
   * @param text - text to be rendered/custom function resolving text that'll get rendered
   *
   */
  constructor(id: string, prompt: string, parents: Scene | Scene[], text: string | (() => string)) {
    this.id = id;
    this.prompt = prompt;
    this.text = typeof text === "string" ? () => text : text;
    this.parents = Array.isArray(parents) ? parents : [parents];
    this.children = [];
  }

  addScene(scene: Scene) {
    this.children.push(scene);
  }

  addScenes(scenes: Scene[]) {
    this.children.concat(scenes);
  }

}

/**
 * This scene is mandatory and as far as I know its usage cannot be avoided, as it's being passed as the first scene to be rendered.
 */
export let intro = new Scene("snovacka-intro-scene", "", [], () => {
  return "welcome to hell";
});