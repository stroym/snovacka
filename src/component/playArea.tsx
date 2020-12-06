import React, {HTMLProps} from "react";
import {SceneComponent} from "./sceneComponent";
import {Scene1} from "../testdata/scene/001/scene1";

export class PlayArea extends React.Component<HTMLProps<HTMLDivElement>> {

  render() {
    return (
      <div id="play-area">
        <SceneComponent scene={new Scene1()}/>
      </div>
    );
  }

}