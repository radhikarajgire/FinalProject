import React, { useContext } from "react";
//import Styles from "./WordSearch.module.css"
import { StateContext } from "../statecontext/stateContext";

function WordSearch() {
  const { words } = useContext(StateContext);

  return (
    <div>
      <button>GENERATE NEW</button>

      <div>{words}</div>
    </div>
  );
}

export default WordSearch;
