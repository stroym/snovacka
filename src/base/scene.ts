export abstract class Scene {

  readonly id: number;
  readonly prompt: string;

  readonly scenes: Scene[];

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

  transition(n: number): Scene {
    return this.scenes[n - 1];
  }

}

//TODO ideally write to markdown files that then get translated to html (cursive and bold, maybe br) - this part is easy (or I could just export to html, buttfuck that)
//TODO, maybe: text postprocessor for getting/setting, conditions (probably a huge headache, but could be worth it