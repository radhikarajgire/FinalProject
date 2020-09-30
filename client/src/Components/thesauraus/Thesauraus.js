import React, { useState, useEffect, useRef } from "react";
import Styles from "./Thesauraus.module.css";

function Thesaurus() {
  const searchBtnRef = useRef(null);
  const [word, setWord] = useState("");
  //const [audiodisp, setAudioDisp] = useState();
  const [definitionword, setDefinitionWord] = useState("");
  const [notfoundinfo, setNotFoundInfo] = useState();
  const [loadinginfo, setLoadingInfo] = useState();

  const apiKey = "23e57298-2b91-475c-9ffa-b743d1e0cdc0";

  async function getData(word) {
    setLoadingInfo("Loading...");
    //loading.style.display = "block";
    // Ajax call
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${word}?key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDefinitionWord(data);
        if (!data.length) {
          //loading.style.display = "none";
          setLoadingInfo("none");
          //notFound.innerText = " No result found";
          setNotFoundInfo("No result found");
          return;
        }
      });

    //(const data = await response.json();

    // if empty result
    //if (!definitionword.length) {
    //loading.style.display = "none";
    //setLoadingInfo("none");
    //notFound.innerText = " No result found";
    //setNotFoundInfo("No result found");
    //return;
    //}

    // If result is suggetions
    //if (typeof data[0] === "string") {
    //loading.style.display = "none";
    // setLoadingInfo("");
    //let heading = document.createElement("h3");
    //heading.innerText = "Did you mean?";
    //notFound.appendChild(heading);
    // data.forEach((element) => {
    // let suggetion = document.createElement("span");
    //suggetion.classList.add("suggested");
    //suggetion.innerText = element;
    //notFound.appendChild(suggetion);
    //});
    //return;
    // }

    // Result found
    //loading.style.display = "none";
    setLoadingInfo("none");
    //let defination = data[0].shortdef[0];
    //console.log(data);
    //defBox.innerText = defination;
    //setDefinitionWord(data);
  }

  return (
    <div>
      <section className={(Styles.input, Styles.container)}>
        <h3>Find others words that mean the same :)</h3>
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
          ? definitionword[0].meta.syns.map((entry, idu) =>
              entry.length !== 0 ? (
                <div key={idu} className={Styles.diction}>
                  <p className={Styles.def}>
                    {idu + 1}.{" "}
                    {entry.map((ent, idn) => (
                      <span key={idn}>{ent}, </span>
                    ))}
                  </p>
                </div>
              ) : (
                console.log(entry.length)
              )
            )
          : ""}
        <div className={Styles.notfound}>{notfoundinfo}</div>
      </section>
    </div>
  );
}

export default Thesaurus;
