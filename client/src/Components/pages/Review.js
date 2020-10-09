import color from "@material-ui/core/colors/amber";
import React from "react";
import ReviewTest from "../allreviewtestdisplay/AllReviewTestDisplayList.js";

function Review() {
  console.log("Play");

  return (
    <div
      style={{
        padding: "0px",
      }}
    >
      <h2
        style={{
          padding: 0,
          margin: 0,
          backgroundColor: "#e6fffa",
        }}
      >
        Review and Test
      </h2>
      <ReviewTest />
    </div>
  );
}

export default Review;
