import React from "react";
import Screenplay from "./screenplay";

export default class GameContainer extends React.Component {

  render() {
    return (
      <div id="snovacka-game-container">
        <Screenplay/>
      </div>
    );
  }

}