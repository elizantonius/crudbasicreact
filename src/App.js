import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbarku from "./component/Navbarku";
import Tabelku from "./component/Tabelku";
import { Route, NavLink, HashRouter } from "react-dom";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <Navbarku />
      <Tabelku />
    </div>
  );
}

export default App;
