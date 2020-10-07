import React, { useState, useContext, useRef } from "react";
import Styles from "./ListeningPractice.module.css";
import ReactPlayer from "react-player";
import { StateContext } from "../statecontext/stateContext";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Typography from "@material-ui/core/Typography";

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
            Back
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
              volume={vollp}
              playing={playvidlistening}
              width="700px"
              className={Styles.player}
              url={vidlistening}
            />
          ) : (
            <h3>In your own words summarise</h3>
          )}
        </div>
        <div className={Styles.slidecontainer}>
          <Typography id="continuous-slider" gutterBottom>
            Volume
          </Typography>
          <VolumeDown />

          <Slider
            value={vollp}
            min={0}
            max={1}
            step={0.1}
            onChange={(e, newValue) => {
              setVollp(newValue);
            }}
            aria-labelledby="continuous-slider"
            id="volRange"
          />

          <VolumeUp />
        </div>
        <div className={Styles.containertwo}>
          <h4>When you have finished typing please submit</h4>
          <textarea
            ref={textsubmissionRef}
            onChange={(e) => setTextInput(e.target.value)}
            value={textinput}
            name="stuidlistenpractice"
            rows="10"
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
