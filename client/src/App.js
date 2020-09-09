import React from "react";
import "./App.css";
import Coordinators from "./Components/Coordinators/Coordinators.js";
import MenuBar from "./Components/menubar/MenuBar.js"
import Header from "./Components/header/Header.js"
import FlashCard from "./Components/flashcard/FlashCard.js"


//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
        <Header />
        <MenuBar/>
        <FlashCard />
    </div>
  );
}

export default App;
