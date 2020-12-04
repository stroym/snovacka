export class OptionSelector extends HTMLSpanElement {

  constructor(text: string, onClickCall: any) {
    super();

    this.className = "option-selector";
    this.textContent = text;
    this.onclick = onClickCall;
  }

}

customElements.define("option-selector", OptionSelector, {extends: "span"});