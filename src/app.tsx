import React from "react";
import "./app.css";
import GameContainer from "./component/gameContainer";
import SideBar from "./component/sideBar";

function App() {
  return (
    <div id="snovacka-app">
      <SideBar/>
      <GameContainer/>
    </div>
  );
}

export default App;