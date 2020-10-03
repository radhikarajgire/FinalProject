import React, { useState, useContext } from "react";
import Styles from "./ExGames.module.css";
import { StateContext } from "../statecontext/stateContext";

function ExGames() {
  const { exgameslist, referenceexgame } = useContext(StateContext);
  // const [singleexgame, setSingleExGame] = useState(0);

  //"https://www.gamestolearnenglish.com/fast-vocab/embed.html"
  return (
    <div className={Styles.holderholder}>
      <div className={Styles.holder}>
        {/*<div className={Styles.formholder}>
          <label className={Styles.label}>Choose a game: </label>
          <select
            onChange={(e) => {
              setSingleExGame(e.target.value);
            }}
            className={Styles.select}
          >
            {exgameslist.length !== 0
              ? exgameslist.map((entry, idn) => (
                  <option key={idn} value={idn}>
                    {entry.info}
                  </option>
                ))
              : ""}
          </select>
              </div>*/}
        <div className={Styles.holder2}>
          <iframe
            className={Styles.iframe}
            src={referenceexgame}
            width="600px"
            height="550px"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ExGames;
