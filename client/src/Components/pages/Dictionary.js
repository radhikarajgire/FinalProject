import React from "react";
import Dict from "../dictionary/Dictionary.js";

function Dictionary() {
  console.log("Dictionary");

  return (
    <div>
      <h2
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        Dictionary
      </h2>
      <Dict />
    </div>
  );
}

export default Dictionary;
