import React from "react";
import "./App.css";
import GameContainer from "./component/GameContainer";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div id="snovacka-app">
      <Sidebar/>
      <GameContainer/>
    </div>
  );
}

export default App;