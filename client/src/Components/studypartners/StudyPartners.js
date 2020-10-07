import React, { useContext } from "react";
import ReactPlayer from "react-player";
import Styles from "./StudyPartners.module.css";
import { StateContext } from "../statecontext/stateContext";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Typography from "@material-ui/core/Typography";
function StudyPartners() {
  const {
    choice,
    setChoice,
    playmusic,
    setPlayMusic,
    musicchoice,
    volsp,
    setVolsp,
  } = useContext(StateContext);

  return (
    <div className={Styles.holderholder}>
      <div className={Styles.holder}>
        <div className={Styles.formholder}>
          <select
            onChange={(e) => {
              setChoice(e.target.value);
              setPlayMusic(true);
            }}
            className={Styles.select}
          >
            <option>Choose something, then go learn</option>
            {musicchoice.map((entry, idv) => (
              <option key={idv} id={entry.id} value={entry.m}>
                {entry.t}
              </option>
            ))}
          </select>
          <button
            className={Styles.button}
            onClick={() => {
              playmusic ? setPlayMusic(false) : setPlayMusic(true);
            }}
          >
            {playmusic ? "stop" : "play"}
          </button>
        </div>
        <div className={Styles.container}>
          {choice.length ? (
            <ReactPlayer
              volume={0}
              playing={playmusic}
              width="800px"
              height="480px"
              controls={true}
              className={Styles.player}
              url={choice}
            />
          ) : (
            <h3>"Learn as if you were to live forever."</h3>
          )}
        </div>
        <div className={Styles.slidecontainer}>
          <Typography id="continuous-slider" gutterBottom>
            Volume
          </Typography>
          <VolumeDown />

          <Slider
            value={volsp}
            min={0}
            max={1}
            step={0.1}
            onChange={(e, newValue) => {
              setVolsp(newValue);
            }}
            aria-labelledby="continuous-slider"
            id="volRange"
          />

          <VolumeUp />
        </div>
      </div>
    </div>
  );
}

export default StudyPartners;
