import React from "react";
import "./app.css";
import {PlayArea} from "./component/playArea";
import {SideBar} from "./component/sideBar";

function App() {
  return (
    <div id="snovacka-app">
      <SideBar/>
      <PlayArea/>
    </div>
  );
}

export default App;