import React from "react";
import ReviewTest from "../allreviewtestdisplay/AllReviewTestDisplayList.js";

function Review() {
  console.log("Play");

  return (
    <div>
      <h2
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        Review and Test
      </h2>
      <ReviewTest />
    </div>
  );
}

export default Review;
