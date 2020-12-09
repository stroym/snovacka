export default class Scene {

  readonly id: string;
  readonly prompt: string;
  readonly text: () => string;
  readonly parents: Scene[] = new Array<Scene>();
  readonly children: Scene[] = new Array<Scene>();

  /**
   *
   * @param id - unique identifier, mainly to make bug reports easier for both parties
   * @param prompt - text for the option that when selected will lead to this scene
   * @param parents - scenes that can access this scene
   * @param text - text to be rendered/custom function resolving text that'll get rendered
   */
  constructor(id: string, prompt: string, parents: Scene | Scene[], text: string | (() => string)) {
    this.id = id;
    this.prompt = prompt;
    this.text = typeof text === "string" ? () => text : text;

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

}