import React, { useState, useRef } from "react";
import Styles from "./Dictionary.module.css";

function Dictionary() {
  const searchBtnRef = useRef(null);
  const [word, setWord] = useState("");
  const [audiodisp, setAudioDisp] = useState();
  const [definitionword, setDefinitionWord] = useState("");
  const [notfoundinfo, setNotFoundInfo] = useState();
  const [loadinginfo, setLoadingInfo] = useState();
  const [suggestions, setSuggestions] = useState("");

  const apiKey = "7537e031-75f3-4ef3-9e0d-bafdfef32db7";

  async function getData(word) {
    setLoadingInfo("Loading...");
    setAudioDisp();
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`
    );
    const data = await response.json();

    // if empty result
    if (data.length === 0) {
      setLoadingInfo("none");

      setNotFoundInfo("No result found");
      setSuggestions("");
      setDefinitionWord("");

      return;
    }

    // If result is suggetions
    if (typeof data[0] === "string") {
      setLoadingInfo("");

      setSuggestions(data);
      setDefinitionWord("");
      setNotFoundInfo("");

      return;
    }

    // Result found

    setLoadingInfo("none");
    setNotFoundInfo("");

    setDefinitionWord(data);
    setSuggestions();

    // Sound
    const soundName = data[0].hwi.prs[0].sound.audio;
    if (soundName) {
      renderSound(soundName);
    }
  }

  function renderSound(soundNam) {
    // https://media.merriam-webster.com/soundc11
    let subfolder = soundNam.charAt(0);
    const fish = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundNam}.wav?key=${apiKey}`;
    setAudioDisp(
      <audio controls>
        <source src={fish} type="audio/wav" />
      </audio>
    );
  }

  return (
    <div>
      <section className={(Styles.input, Styles.container)}>
        <h3>Discover new words, expand your knowledge, and improve you English.
          Browse through our extensive database of nglish words.Dont stop learning.</h3>
        <div className={Styles.formwrap}>
          <div className={Styles.inputwrap}>
            <input className={Styles.input}
              type="text"
              placeholder="Search the Dictionary"
              id="input"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button className={Styles.button}
              ref={searchBtnRef}
              onClick={(e) => {
                e.preventDefault();
                if (word === "") {
                  alert("Word is required");
                  return;
                }
                getData(word);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section className={(Styles.data, Styles.container)}>
        <span className={Styles.loading}>{loadinginfo}</span>
        <div>
          {suggestions
            ? suggestions.map((entry, idf) => <span key={idf}>{entry}, </span>)
            : ""}
        </div>
        <div>
          {" "}
          {definitionword !== "" || definitionword.length !== 0
            ? definitionword.map((entry, idh) =>
                entry.shortdef[0] ? (
                  <div key={idh} className={Styles.diction}>
                    <h4>
                      {idh + 1}. {entry.fl}
                    </h4>
                    <div className={Styles.def}>
                      {entry.shortdef.map((entry, idu) => (
                        <p key={idu}>{entry} </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            : console.log("123")}
        </div>
        <div className={Styles.audio}>{audiodisp}</div>
        <div className={Styles.notfound}>{notfoundinfo}</div>
      </section>
    </div>
  );
}

export default Dictionary;
