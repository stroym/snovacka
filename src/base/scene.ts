export class Scene {

  readonly id: string;
  readonly prompt: string;
  readonly text: () => string;
  readonly parents: Scene | Scene[];
  readonly scenes: Scene[];

  /**
   *
   * @param id - unique identifier, mainly to make bug reports easier for both parties
   * @param prompt - text for the option that when selected will lead to this scene
   * @param parents - scenes that can access this scene
   * @param text - optional custom function resolving text that'll get rendered
   * @protected
   */
  constructor(id: string, prompt: string, parents: Scene | Scene[], text: () => string) {
    this.id = id;
    this.prompt = prompt;
    this.text = text;
    this.scenes = [];
    this.parents = parents;

    if (Array.isArray(parents)) {
      for (const parent of parents) {
        parent.addScene(this);
      }
    } else {
      parents.addScene(this);
    }
  }

  addScene(scene: Scene) {
    this.scenes.push(scene);
  }

  addScenes(scenes: Scene[]) {
    this.scenes.concat(scenes);
  }

}
