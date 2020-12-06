import React, {HTMLProps} from "react";
import {OptionsContainer} from "./optionsContainer";
import {TextArea} from "./textArea";
import PropTypes from "prop-types";
import {Scene} from "../base/scene";

export class SceneComponent extends React.Component<ChildContentProps & HTMLProps<HTMLDivElement>> {

  static props = {
    childContent: PropTypes.string
  }

  render() {
    return (
      <div className="snovacka-scene">
        <TextArea content={this.props.scene.render()}/>
        <OptionsContainer scenes={this.props.scene.children}/>
      </div>
    );
  }

}

type ChildContentProps = {
  scene: Scene
}

