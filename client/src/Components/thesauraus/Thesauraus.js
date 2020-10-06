import React, { useState, useRef } from "react";
import Styles from "./Thesauraus.module.css";

function Thesaurus() {
  const searchBtnRef = useRef(null);
  const [word, setWord] = useState("");
  const [definitionword, setDefinitionWord] = useState("");
  const [notfoundinfo, setNotFoundInfo] = useState();
  const [loadinginfo, setLoadingInfo] = useState();
  const [suggestions, setSuggestions] = useState("");

  const apiKey = "23e57298-2b91-475c-9ffa-b743d1e0cdc0";

  async function getData(word) {
    setLoadingInfo("Loading...");

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
        if (!data.length) {
          setLoadingInfo("none");

          setNotFoundInfo("No result found");
          setSuggestions("");
          setDefinitionWord("");
          return;
        }

        if (typeof data[0] === "string") {
          setLoadingInfo("");
          setSuggestions(data);
          setDefinitionWord("");

          return;
        }
        setDefinitionWord(data);
        setSuggestions();
        setNotFoundInfo("");
      });

    setLoadingInfo("none");
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
        <div>
          {suggestions
            ? suggestions.map((entry, idf) => <span key={idf}>{entry}, </span>)
            : ""}
        </div>
        <div>
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
        </div>
        <div className={Styles.notfound}>{notfoundinfo}</div>
      </section>
    </div>
  );
}

export default Thesaurus;
