import React from "react";
import "./App.css";
import Coordinators from "./Components/Coordinators/Coordinators.js";

import MenuBar from "./Components/menubar/MenuBar.js";
import Header from "./Components/header/Header.js";
import FlashCard from "./Components/flashcard/FlashCard.js";
import Snap from "./Components/snap/Snap.js"
import MDBFooter from "./Components/footer/footer.js";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">

      <Header />
      <MenuBar />
      <FlashCard />
      <MDBFooter />

    </div>
  );
}

export default App;
