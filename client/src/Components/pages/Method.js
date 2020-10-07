import React from "react";
import Studypartners from "../studypartners/StudyPartners.js";

function Method() {
  console.log("Method");
  let styleses = {
    backgroundColor: 'black'
  }
  return (
    <div className ="methods" style={styleses}>
      <h2>Method</h2>
      <Studypartners />
    </div>
  );
}

export default Method;
