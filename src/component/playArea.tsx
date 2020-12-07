import React from "react";
import {Screenplay} from "./screenplay";

export class PlayArea extends React.Component {

  render() {
    return (
      <div id="snovacka-play-container">
        <Screenplay/>
      </div>
    );
  }

}