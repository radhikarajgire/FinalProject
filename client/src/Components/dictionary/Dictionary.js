import React, { useState, useEffect, useRef } from "react";
import Styles from "./Dictionary.module.css";

function Dictionary() {
  const searchBtnRef = useRef(null);
  const [word, setWord] = useState("");
  const [audiodisp, setAudioDisp] = useState();
  const [definitionword, setDefinitionWord] = useState("");
  const [notfoundinfo, setNotFoundInfo] = useState();
  const [loadinginfo, setLoadingInfo] = useState();

  const apiKey = "7537e031-75f3-4ef3-9e0d-bafdfef32db7";

  async function getData(word) {
    setLoadingInfo("Loading...");
    //loading.style.display = "block";
    //Ajax call
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`
    );
    console.log(response);
    const data = await response.json();
    setDefinitionWord(data);
    // if empty result
    if (!data.length) {
      //loading.style.display = "none";
      setLoadingInfo("none");
      //notFound.innerText = " No result found";
      setNotFoundInfo("No result found");
      return;
    }

    // If result is suggetions
    if (typeof data[0] === "string") {
      //loading.style.display = "none";
      setLoadingInfo("");
      //let heading = document.createElement("h3");
      //heading.innerText = "Did you mean?";
      //notFound.appendChild(heading);
      data.forEach((element) => {
        let suggetion = document.createElement("span");
        suggetion.classList.add("suggested");
        suggetion.innerText = element;
        //notFound.appendChild(suggetion);
      });
      return;
    }

    // Result found
    //loading.style.display = "none";
    setLoadingInfo("none");
    //let defination = data[0].shortdef[0];
    console.log(data);
    //defBox.innerText = defination;
    setDefinitionWord(data);

    // Sound
    const soundName = data[0].hwi.prs[0].sound.audio;
    if (soundName) {
      console.log(soundName);
      renderSound(soundName);
    }

    console.log(data);
  }

  function renderSound(soundName) {
    // https://media.merriam-webster.com/soundc11
    let subfolder = soundName.charAt(0);

    const fish = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundName}.wav?key=${apiKey}`;

    setAudioDisp(fish);
    //let aud = document.createElement("audio");
    //aud.src = soundSrc;
    //aud.controls = true;
    //audioBox.appendChild(aud);
  }

  return (
    <div>
      <section className={(Styles.input, Styles.container)}>
        <h3>Find many words that exist in the world :)</h3>
        <div className={Styles.formwrap}>
          <div className={Styles.inputwrap}>
            <input
              type="text"
              placeholder="Type a word"
              id="input"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button
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
        {definitionword !== ""
          ? definitionword.map((entry, idh) =>
              entry.shortdef[0] ? (
                <div key={idh} className={Styles.diction}>
                  <h4>
                    {idh + 1}. {entry.fl}
                  </h4>
                  <p className={Styles.def}>
                    {entry.shortdef.map((entry, idu) => (
                      <p key={idu}>{entry} </p>
                    ))}
                  </p>
                </div>
              ) : (
                ""
              )
            )
          : console.log("123")}
        <div className={Styles.audio}>
          {audiodisp ? (
            <audio controls>
              <source src={audiodisp} type="audio/wav" />
            </audio>
          ) : (
            ""
          )}
        </div>
        <div className={Styles.notfound}>{notfoundinfo}</div>
      </section>
    </div>
  );
}

export default Dictionary;
