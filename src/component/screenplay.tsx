import React from "react";
import SelectionsContainer from "./selectionsContainer";
import Scene, {intro} from "../engine/base/scene";
import TextView from "./textView";

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
        <TextView content={this.state.scene.text()}/>
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

