import React, { useState, useContext } from "react";
import { StateContext } from "../statecontext/stateContext";
import Styles from "./Scheduler.module.css";

function Appointment() {
  const { days, setDays } = useContext(StateContext);
  const [taken, setTaken] = useState(Styles.appointment);
  const [userid, setUserId] = useState(3);

  return (
    <div className={Styles.holderholder}>
      <h1>Appointment Picker</h1>
      <div className={Styles.holder}>
        {days !== undefined
          ? days.map((entry, idn) => (
              <div className={Styles.day}>
                {entry.map((enter, idz) => (
                  <div>
                    {idz !== 0 ? (
                      <h3
                        className={
                          enter.isSelected
                            ? enter.idofselector === userid
                              ? Styles.appointmenttakenme
                              : Styles.appointmenttaken
                            : Styles.appointment
                        }
                        id={enter.id}
                        onClick={(e) => {
                          const fish = days.map((input) =>
                            input.map((inp) =>
                              inp.idofselector === 0 ||
                              inp.idofselector === userid
                                ? enter.id !== inp.id
                                  ? inp
                                  : inp.isSelected
                                  ? {
                                      id: inp.id,
                                      starttime: inp["starttime"],
                                      endtime: inp["endtime"],
                                      isSelected: false,
                                      idofselector: 0,
                                    }
                                  : {
                                      id: inp.id,
                                      starttime: inp["starttime"],
                                      endtime: inp["endtime"],
                                      isSelected: true,
                                      idofselector: userid,
                                    }
                                : inp
                            )
                          );
                          setDays(fish);
                        }}
                      >
                        {enter.starttime} - {enter.endtime}
                      </h3>
                    ) : (
                      <h4 className={Styles.datecal}>
                        {new Date(enter.datecal).toLocaleDateString("en-UK", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </h4>
                    )}
                  </div>
                ))}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Appointment;
