import React, { useState, useContext, useRef, useEffect } from "react";
import { StateContext } from "../statecontext/stateContext";
import Styles from "./SubjectOverlay.module.css";

function SubjectOverlay({ fromabove }) {
  const { days, setDays, userid, setShowOverview } = useContext(StateContext);
  const textoverviewRef = useRef(null);
  const [textinput, setTextInput] = useState("");

  useEffect(() => {
    const sammy = fromabove.subejct;
    setTextInput(sammy);
  }, []);

  function filltext(e) {
    const fish = days.map((input) =>
      input.map((inp) =>
        inp.idofselector === 0 || inp.idofselector === userid
          ? fromabove.id !== inp.id
            ? inp
            : inp.isSelected
            ? e
              ? {
                  id: inp.id,
                  starttime: inp["starttime"],
                  endtime: inp["endtime"],
                  isSelected: false,
                  idofselector: 0,
                  subejct: "",
                }
              : {
                  id: inp.id,
                  starttime: inp["starttime"],
                  endtime: inp["endtime"],
                  isSelected: true,
                  idofselector: userid,
                  subejct: textoverviewRef.current.value,
                }
            : e
            ? {
                id: inp.id,
                starttime: inp["starttime"],
                endtime: inp["endtime"],
                isSelected: true,
                idofselector: userid,
                subejct: textoverviewRef.current.value,
              }
            : {
                id: inp.id,
                starttime: inp["starttime"],
                endtime: inp["endtime"],
                isSelected: false,
                idofselector: userid,
                subejct: "",
              }
          : inp
      )
    );
    setDays(fish);
    setShowOverview();
  }

  return (
    <div className={Styles.box}>
      <h4 className={Styles.abovetext}>
        {fromabove.isSelected ? "Cancel appointment ?" : "Add appointment ?"}
      </h4>
      <h4 className={Styles.abovetext}>
        Student {userid === 0 ? fromabove.idofselector : ""}
      </h4>
      <textarea
        onChange={(e) => setTextInput(e.target.value)}
        value={textinput}
        className={Styles.text}
        ref={textoverviewRef}
      ></textarea>
      <div className={Styles.buttonholder}>
        <button className={Styles.button} onClick={() => filltext(false)}>
          {fromabove.isSelected ? "Add Info" : "Cancel"}
        </button>
        <button className={Styles.button} onClick={() => filltext(true)}>
          {fromabove.isSelected ? "Remove" : "Confirm"}
        </button>
      </div>
    </div>
  );
}

export default SubjectOverlay;
