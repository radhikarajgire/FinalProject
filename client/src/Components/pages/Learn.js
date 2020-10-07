import React from "react";
import Courses from "../courses/courseList.js";

function Learn() {
  console.log("Learn");
  return (
    <div>
      <h2
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        Learn
      </h2>
      <Courses />
    </div>
  );
}

export default Learn;
