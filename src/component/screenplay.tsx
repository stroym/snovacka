import React from "react";
import SelectionsContainer from "./selectionsContainer";
import {Scene} from "../base/scene";
import {intro} from "../engine/scenes";
import TextArea from "./textArea";

export default class Screenplay extends React.Component<{}, ChildContentProps> {

  constructor(props = {}) {
    super(props);

    this.state = {
      scene: intro
    };

    this.updateScene = this.updateScene.bind(this);
  }

  render() {
    return (
      <div className="snovacka-screenplay">
        <TextArea content={this.state.scene.text()}/>
        <SelectionsContainer scenes={this.state.scene.scenes} updateScene={this.updateScene}/>
      </div>
    );
  }

  updateScene(newScene: Scene) {
    this.setState({
      scene: newScene
    });
  }

}

type ChildContentProps = {
  scene: Scene
}

