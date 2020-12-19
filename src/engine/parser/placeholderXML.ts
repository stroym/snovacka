export class Setter {

  target: string;
  value: string;

  constructor(dto: any) {
    this.target = dto.attributes.key;
    this.value = dto.content;
  }

  set(): void {
  }

}

// export class Getter {
//
//   target: string;
//   value: string;
//
//   constructor(target: string, value: string) {
//     this.target = target;
//     this.value = value;
//   }
//
// }