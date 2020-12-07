import React from "react";
import {SelectionsContainer} from "./selectionsContainer";
import {TextArea} from "./textArea";
import {Scene} from "../base/scene";
import {intro} from "../engine/scenes";

export class Screenplay extends React.Component<{}, ChildContentProps> {

  constructor() {
    super({});

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

