import React from "react";
import SelectionsContainer from "./SelectionsContainer";
import Scene from "../engine/base/Scene";
import TextView from "./TextView";
import {intro} from "../engine/data/Scenes";

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
        <TextView scene={this.state.scene}/>
        <SelectionsContainer scenes={this.state.scene.children} updateScene={this.updateScene}/>
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

