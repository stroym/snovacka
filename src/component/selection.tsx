import React from "react";
import {Scene} from "../base/scene";

export default class Selection extends React.Component<OptionProps> {

  constructor(props: Readonly<OptionProps> | OptionProps) {
    super(props);
    this.listenForKeyPress = this.listenForKeyPress.bind(this);
  }

  render() {
    return (
      <span className="snovacka-selection" onClick={() => this.props.updateScene(this.props.scene)}>
        <span className="snovacka-selection-number">{this.props.number}</span>
        <span className="snovacka-selection-prompt">{this.props.scene.prompt}</span>
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

