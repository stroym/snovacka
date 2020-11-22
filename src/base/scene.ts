export class Scene {

  readonly id: number;

  readonly parent?: Scene;
  readonly children?: Scene[];

  constructor(id: number) {
    this.id = id;
  }


  public render() {
    return "test test _\"test direct speech\"_ \n blob";
  }

  private static italicize(text: string) {
    var temp = text.replace(" \_"," <i>")
    return temp.replace("\_ ","<i/> ")
  }

  public transition() {

  }

}
