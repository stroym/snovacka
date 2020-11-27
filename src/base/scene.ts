export abstract class Scene {

  readonly id: number
  readonly prompt: string

  readonly scenes: Array<Scene>

  // private readonly _participants: Character[] = []

  protected constructor(id: number, prompt: string, scenes?: Array<Scene>) {
    this.id = id;
    this.prompt = prompt;

    if (scenes) {
      this.scenes = scenes
    } else {
      this.scenes = []
    }
  }

  abstract render(): string

  transition(n: number): Scene {
    return this.scenes[n - 1]
  }

}