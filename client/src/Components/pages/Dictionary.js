import React from "react";
import Dict from "../dictionary/Dictionary.js";

function Dictionary() {
  console.log("Dictionary");

  return (
    <div>
      <h2
        style={{
          padding: "0px",
          marginBottom: "100px",
          backgroundColor: "#e6fffa",
        }}
      >
        Dictionary
      </h2>
      <Dict />
    </div>
  );
}

export default Dictionary;
