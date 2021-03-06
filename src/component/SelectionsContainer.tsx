import React from "react";
import Selection from "./Selection";
import Scene from "../engine/base/Scene";

export default class SelectionsContainer extends React.Component<ContainerProps> {

  render() {
    return (
      <div id="snovacka-selection-container">
        {
          this.props.scenes.map((scene) => (
            <Selection
              key={scene.id} number={this.props.scenes.indexOf(scene) + 1} scene={scene}
              updateScene={this.props.updateScene}
            />))
        }
      </div>
    );
  }

}

type ContainerProps = {
  scenes: Scene[],
  updateScene: any
}