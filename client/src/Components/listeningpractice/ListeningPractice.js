import React, { useState, useContext, useRef } from "react";
import Styles from "./ListeningPractice.module.css";
import ReactPlayer from "react-player";
import { StateContext } from "../statecontext/stateContext";

function ListeningPractice() {
  const listpracplayer = useRef(null);
  const textsubmissionRef = useRef(null);
  const { listeningpractice } = useContext(StateContext);
  const [vidlistening, setVidListening] = useState();
  const [playvidlistening, setPlayVidListening] = useState(0);
  const [vollp, setVollp] = useState(80);
  //const [playpos, setPlayPos] = useState(0);
  const [textinput, setTextInput] = useState("");

  return (
    <div className={Styles.holderholder}>
      <div className={Styles.holder}>
        <div className={Styles.formholder}>
          <button
            className={Styles.button}
            onClick={() => {
              const playtime = listpracplayer.current.getCurrentTime();
              if (playtime < 1) return;
              listpracplayer.current.seekTo(playtime - 10, "seconds");
            }}
          >
            Go back
          </button>
          <select
            onChange={(e) => {
              setVidListening(e.target.value);
              setPlayVidListening(true);
            }}
            className={Styles.select}
          >
            <option>Choose something, then go learn</option>
            {listeningpractice.map((entry, idb) => (
              <option id={entry.id} key={idb} value={entry.s}>
                {entry.descrip}
              </option>
            ))}
          </select>
          <button
            className={Styles.button}
            onClick={() => {
              playvidlistening
                ? setPlayVidListening(false)
                : setPlayVidListening(true);
            }}
          >
            {playvidlistening ? "stop" : "play"}
          </button>
        </div>
        <div className={Styles.container}>
          {vidlistening ? (
            <ReactPlayer
              ref={listpracplayer}
              volume={vollp / 100}
              playing={playvidlistening}
              width="500px"
              height="300px"
              className={Styles.player}
              url={vidlistening}
            />
          ) : (
            <h3>In your own words summarise</h3>
          )}
        </div>
        <div className={Styles.slidecontainer}>
          <h3 className={Styles.slidermarker}>Quiet</h3>
          <input
            onChange={(e) => setVollp(e.target.value)}
            type="range"
            min="0"
            max="100"
            value={vollp}
            className={Styles.slider}
            id="volRange"
          />
          <h3 className={Styles.slidermarker}>Loud</h3>
        </div>
        <div>
          <h4>When you have finished typing please submit</h4>
          <textarea
            ref={textsubmissionRef}
            onChange={(e) => setTextInput(e.target.value)}
            value={textinput}
            name="stuidlistenpractice"
            rows="4"
            cols="50"
          >
            {" "}
          </textarea>
          <button
            className={Styles.button}
            onClick={() => {
              setTextInput("");
              console.log(textsubmissionRef.current.value);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListeningPractice;
