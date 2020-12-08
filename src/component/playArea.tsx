import React from "react";
import Screenplay from "./screenplay";

export default class PlayArea extends React.Component {

  render() {
    return (
      <div id="snovacka-play-container">
        <Screenplay/>
      </div>
    );
  }

}