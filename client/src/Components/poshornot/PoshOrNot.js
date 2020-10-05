import React, { useContext, useState, useRef } from "react";
import ReactPlayer from "react-player";
import Styles from "./PoshOrNot.module.css";
import { StateContext } from "../statecontext/stateContext";

function PoshOrNot() {
  const playerRef = useRef(null);
  const { poshornotchoice } = useContext(StateContext);
  const [accent, setAccent] = useState("0");
  const [replay, setReplay] = useState(false);
  const [buttonstyleposh, setButtonStylePosh] = useState(Styles.button);
  const [buttonstylenot, setButtonStyleNot] = useState(Styles.button);

  return (
    <div className={Styles.holderholder}>
      <div className={Styles.holder}>
        <div className={Styles.formholder}>
          <select
            onChange={(e) => {
              setAccent(e.target.value);
              setButtonStylePosh(Styles.button);
              setButtonStyleNot(Styles.button);
              setReplay(false);
            }}
            className={Styles.select}
          >
            {poshornotchoice.map((entry, idn) => (
              <option key={idn} id={idn} value={idn}>
                {idn + 1}
              </option>
            ))}
          </select>
          <button
            className={Styles.button}
            onClick={() => {
              replay ? setReplay(false) : setReplay(true);
              setAccent((bef) => bef);
            }}
          >
            {replay ? "playing" : "play"}
          </button>
        </div>
      </div>
      <div className={Styles.holderthree}>
        <h3>
          {buttonstyleposh === Styles.buttonright ||
          buttonstylenot === Styles.buttonright
            ? "This accent is from " + poshornotchoice[accent]["area"]
            : "Guess the British accent"}
        </h3>
      </div>

      <div className={Styles.holdertwo}>
        <div className={Styles.container}>
          <button
            className={buttonstyleposh}
            onClick={() => {
              poshornotchoice[accent]["posh"]
                ? setButtonStylePosh(Styles.buttonright)
                : setButtonStylePosh(Styles.buttonwrong);
            }}
          >
            Posh
          </button>
          {
            <ReactPlayer
              ref={playerRef}
              onEnded={() => {
                setReplay(false);
                playerRef.current.seekTo(
                  poshornotchoice[accent]["t"],
                  "seconds"
                );
              }}
              volume={1}
              playing={replay}
              width="0px"
              height="0px"
              controls={false}
              url={poshornotchoice[accent]["s"]}
            />
          }
          <button
            className={buttonstylenot}
            onClick={() => {
              poshornotchoice[accent]["posh"]
                ? setButtonStyleNot(Styles.buttonwrong)
                : setButtonStyleNot(Styles.buttonright);
            }}
          >
            Not
          </button>
        </div>
      </div>
    </div>
  );
}

export default PoshOrNot;
