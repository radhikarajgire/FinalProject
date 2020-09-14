import React, {useState, useContext, useEffect} from "react";
import "./App.css";
import { StateContext } from "./Components/statecontext/stateContext";

import Coordinators from "./Components/Coordinators/Coordinators.js";

import MenuBar from "./Components/menubar/MenuBar.js";
import Header from "./Components/header/Header.js";
import FlashCard from "./Components/flashcard/FlashCard.js";
import Snap from "./Components/snap/Snap.js"
import WordSearch from "./Components/wordsearch/WordSearch.js"
import MultiTest from "./Components/multitest/MultiTest.js"
import FooterTwo from "./Components/footertwo/FooterTwo.js"
import MDBFooter from "./Components/footer/footer.js";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//<img src={logo} className="App-logo" alt="logo" />
function App() {
  const { menuitem } = useContext(StateContext);
  const [singlerender, setSingleRender]=useState()

useEffect(()=>{
  const renderarray = {ba: <FlashCard/>, bb: <Snap/>, bc: <WordSearch/>, cb: <MultiTest/>}
  const singre = renderarray[menuitem]
  console.log(menuitem)
setSingleRender(singre)},[menuitem])

  return (
    <div className="App">

      <Header />
      <MenuBar />
      {singlerender}
      <FooterTwo />

    </div>
  );
}

export default App;
