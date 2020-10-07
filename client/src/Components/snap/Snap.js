import React, { useState, useContext } from "react";
import Styles from "./Snap.module.css";
import { StateContext } from "../statecontext/stateContext";

function Snap() {
  const { referencedata } = useContext(StateContext);
  const [oneEntry, setOneEntry] = useState("");
  const [entrylist, setEntryList] = useState([]);
  const [ident, setIdent] = useState(0);
  const [tryagain, setTryAgain] = useState(false);
  const [idcomp, setIDcomp] = useState();
  //const [choice, setChoice] = useState(0);
  const [correctclass, setCorrectClass] = useState();

  function TryAgain() {
    const newElementq = referencedata
      //.filter((entry, id) => id > 0)
      .map((entry, id) => {
        const container = {};
        container.idaq = id;
        container.qa = JSON.parse(entry).q;
        return container;
      });
    const newElementa = referencedata
      //.filter((entry, id) => id > 0)
      .map((entry, id) => {
        const container = {};
        container.idaq = id;
        container.qa = JSON.parse(entry).a;
        return container;
      });
    const newElementall = newElementq.concat(newElementa);
    shuffleArray(newElementall);
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    setOneEntry("");
    setEntryList(newElementall);

    var dataloop = [];
    for (let i = 0; i < referencedata.length * 2; i++) {
      dataloop = dataloop.concat([Styles.element]);
    }
    setCorrectClass(dataloop);
  }

  function correct(entry, e, aqid) {
    if (tryagain) {
      setIDcomp(aqid);
      setOneEntry(entry);
      setIdent(parseInt(e.target.id));
      setTryAgain(false);
    } else {
      setOneEntry(entry);
      setIdent(parseInt(e.target.id));
      setTryAgain(true);
      if (idcomp === aqid) {
        const newdata = correctclass;
        const goat = parseInt(e.target.id);
        setEntryList((previous) => [
          ...previous,
          (entrylist[ident]["qa"] = ""),
          (entrylist[goat]["qa"] = ""),
        ]);
        newdata[ident] = Styles.elementblank;
        newdata[goat] = Styles.elementblank;
        setCorrectClass([...newdata]);
      } else {
        setIDcomp((before) => before, "");
      }
    }
  }

  return (
    <div className={Styles.holderholder}>
      <div className={Styles.holder}>
        <div className={Styles.formholder}>
          <label className={Styles.label}>Have a go </label>
          {/*<select
            onChange={(e) => setChoice(e.target.value)}
            className={Styles.select}
          >
            {customElements.map((entry, idp) => (
              <option key={idp} value={idp}>
                {entry[0]["qadata"]}
              </option>
            ))}
            </select>*/}
          <button className={Styles.button} onClick={() => TryAgain()}>
            TRY
          </button>
        </div>

        <div className={Styles.container}>
          {entrylist
            ? entrylist.map((entry, idn) => (
                <div
                  id={idn}
                  key={idn}
                  className={correctclass[idn]}
                  onClick={(e) => {
                    correct(entry.qa, e, entry.idaq);
                  }}
                >
                  {ident === idn ? <p>{oneEntry}</p> : ""}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Snap;
