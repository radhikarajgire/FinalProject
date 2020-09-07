import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Coordinators from "./Components/Coordinators/Coordinators.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className ="App-title"> Welcome to Our App</h1>
      </header>
       < Coordinators />
    </div>
  );
}

export default App;
