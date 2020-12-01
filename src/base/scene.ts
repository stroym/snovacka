export abstract class Scene {

  readonly id: number; //or maybe string, could work better
  readonly prompt: string;

  readonly scenes: Scene[];

  /**
   *
   * @param id - unique identifier, mainly to make bug reports easier for both parties
   * @param prompt - text for the option that when selected will lead to this scene
   * @param scenes - scenes that can be accessed from this scene
   * @protected
   */
  protected constructor(id: number, prompt: string, scenes?: Scene[]) {
    this.id = id;
    this.prompt = prompt;

    if (scenes) {
      this.scenes = scenes;
    } else {
      this.scenes = [];
    }
  }

  abstract render(): string;

}

//TODO ideally write to markdown files that then get translated to html (cursive and bold, maybe br) - this part is easy (or I could just export to html, buttfuck that)
//TODO, maybe: text postprocessor for getting/setting, conditions (probably a huge headache, but could be worth it)