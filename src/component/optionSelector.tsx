import React from "react";
import {Scene} from "../base/scene";

export class OptionSelector extends React.Component<OptionProps> {

  constructor(props: Readonly<OptionProps> | OptionProps) {
    super(props);
    this.listenForKeyPress = this.listenForKeyPress.bind(this);
  }

  render() {
    return (
      <span className="option-selector" onClick={() => this.props.updateScene(this.props.scene)}>
        <span className="snovacka-option-selector-number">{this.props.number}</span>
        <span className="snovacka-option-selector-prompt">{this.props.scene.prompt}</span>
      </span>
    );
  }

  componentDidMount() {
    document.addEventListener("keypress", this.listenForKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.listenForKeyPress);
  }

  listenForKeyPress(e: KeyboardEvent) {
    console.log(e.code);

    if (e.code.match("Digit[0-9]+") || e.code.match("Numpad[0-9]+")) {
      if (parseInt(e.code.slice(e.code.length - 1)) === this.props.number) {
        this.props.updateScene(this.props.scene);
      }
    }
  }

}

type OptionProps = {
  number: number,
  scene: Scene,
  updateScene: any
}
