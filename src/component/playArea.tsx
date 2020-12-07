import React, {HTMLProps} from "react";
import {SceneComponent} from "./sceneComponent";

export class PlayArea extends React.Component<HTMLProps<HTMLDivElement>> {

  render() {
    return (
      <div id="play-area">
        <SceneComponent/>
      </div>
    );
  }

}