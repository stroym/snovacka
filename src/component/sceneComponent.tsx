import React, {HTMLProps} from "react";
import {OptionsContainer} from "./optionsContainer";
import {TextArea} from "./textArea";
import {Scene} from "../base/scene";
import {Scene1} from "../testdata/scene/001/scene1";

export class SceneComponent extends React.Component<HTMLProps<HTMLDivElement>, ChildContentProps> {

  constructor(props: Readonly<React.HTMLProps<HTMLDivElement>> | React.HTMLProps<HTMLDivElement>) {
    super(props);

    this.state = {
      scene: new Scene1()
    };

    this.updateScene = this.updateScene.bind(this);
  }

  render() {
    return (
      <div className="snovacka-scene">
        <TextArea content={this.state.scene.render()}/>
        <OptionsContainer scenes={this.state.scene.children} updateScene={this.updateScene}/>
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

