import React, { useEffect, useState, useContext } from "react";
import Styles from "./FlashCard.module.css";
import { StateContext } from "../statecontext/stateContext";

function FlashCard() {
  const { customElements, referencedata } = useContext(StateContext);
  const [rotpost, setRotPost] = useState(true);
  //these should be changed to be entries from our DB (extracted from Entries - need to then display the chosen card choice)
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [smith, setSmith] = useState();
  const [schmidt, setSchmidt] = useState();
  const [card, setCard] = useState(0);
  //Entries is the complete data set from the DB
  //const [entries, setEntries] = useState();
  //Use choice of which level to do
  const [choice, setChoice] = useState(0);

  useEffect(() => {
    console.log(JSON.parse(referencedata[0]));
    const chips = document.getElementById("flashcard").classList;
    chips.remove(Styles.rotatback);
    chips.add(Styles.extra);
    const ques = JSON.parse(referencedata[card]).q;
    const answ = JSON.parse(referencedata[card]).a;
    setQuestion(ques);
    setAnswer(answ);

    const utterance = new SpeechSynthesisUtterance(ques);
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.rate = 0.8;
    utterance.lang = "en-GB";
    setSmith(utterance);

    const utter = new SpeechSynthesisUtterance(answ);
    utter.pitch = 1;
    utter.volume = 1;
    utter.rate = 0.8;
    utter.lang = "en-GB";
    setSchmidt(utter);
  }, [referencedata, card, choice]);

  function Rotatenow() {
    const fish = document.getElementById("flashcard").classList;
    if (rotpost) {
      setRotPost(false);
    } else {
      setRotPost(true);
    }

    if (rotpost) {
      fish.remove(Styles.extra);
      fish.add(Styles.rotatback);
    } else {
      fish.remove(Styles.rotatback);
      fish.add(Styles.extra);
    }
  }
  //setFilteredEntries(entries.filter(entry =>{return entry.level.toLowerCase().includes(choice.toLowerCase())}) )
  /*<button
          onClick={(e) => console.log(e.value)}
          className={Styles.inputlevel}
        >
          Choose
        </button>*/

  return (
    <div className={Styles.holder}>
      <div className={Styles.flashnav}>
        <div
          onClick={() => {
            if (card === 0) {
              setCard(referencedata.length - 1);
            } else {
              setCard(card - 1);
            }
          }}
          className={Styles.clickbutton}
        >
          Previous
        </div>

        <label className={Styles.label}>Choose a question </label>
        {/* <select
          onChange={(e) => setChoice(e.target.value)}
          className={Styles.select}
        >
          {customElements.map((entry, idi) => (
            <option key={idi} value={idi}>
              {entry[0]["qadata"]}
            </option>
          ))}
          </select>*/}

        <div
          onClick={() => {
            if (card === referencedata.length - 1) {
              setCard(0);
            } else {
              setCard(card + 1);
            }
          }}
          className={Styles.clickbutton}
        >
          Next
        </div>
      </div>
      <div className={Styles.entrycontainer}>
        <div
          onClick={() => Rotatenow()}
          className={Styles.entry}
          id="flashcard"
        >
          <div className={Styles.front}>
            <div className={Styles.textholder}>
              <h1 onMouseOver={() => speechSynthesis.speak(smith)}>
                {question}
              </h1>
            </div>
          </div>
          <div className={Styles.back}>
            <div className={Styles.textholder}>
              <h1 onMouseOver={() => speechSynthesis.speak(schmidt)}>
                {answer}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
