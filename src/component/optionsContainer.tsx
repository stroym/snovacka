import React from "react";
import {OptionSelector} from "./optionSelector";
import {Scene} from "../base/scene";

//TODO figure out indent rules
/* eslint-disable indent */
export class OptionsContainer extends React.Component<ContainerProps> {

  render() {
    return (
      <div id="options-container">
        {
          this.props.scenes.map((scene) => (
            <OptionSelector key={scene.id} number={this.props.scenes.indexOf(scene) + 1} scene={scene}
                            updateScene={this.props.updateScene}/>))
        }
      </div>
    );
  }

}

type ContainerProps = {
  scenes: Scene[],
  updateScene: any
}