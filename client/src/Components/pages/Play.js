import React from "react";
import AllGames from "../allgamesdisplay/AllGamesDisplayList.js";

function Play() {
  console.log("Play");

  return (
    <div>
      <h2
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        Play
      </h2>
      <AllGames />
    </div>
  );
}

export default Play;
