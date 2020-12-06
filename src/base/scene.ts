export abstract class Scene {

  readonly id: string;
  readonly prompt: string;

  readonly children: Scene[];

  /**
   *
   * @param id - unique identifier, mainly to make bug reports easier for both parties
   * @param prompt - text for the option that when selected will lead to this scene
   * @param scenes - scenes that can be accessed from this scene
   * @protected
   */
  protected constructor(id: string, prompt: string, scenes?: Scene[]) {
    this.id = id;
    this.prompt = prompt;

    if (scenes) {
      this.children = scenes;
    } else {
      this.children = [];
    }
  }

  abstract render(): string;

}
