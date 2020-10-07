import React from "react";
import Thesaurusimp from "../thesauraus/Thesauraus.js";

function Thesaurus() {
  console.log("Thesaurus");

  return (
    <div>
      <h2
        style={{
          padding: 0,
          margin: 0,
          backgroundColor:"#e6fffa"
        }}
      >
        Thesaurus
      </h2>
      <Thesaurusimp />
    </div>
  );
}

export default Thesaurus;
