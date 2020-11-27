export class Name {
  //TODO maybe add more nickname variations

  readonly firstName: string;
  readonly lastName?: string;
  readonly nickName?: string;

  constructor(firstName: string, lastName?: string, nickName?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
  }

}
