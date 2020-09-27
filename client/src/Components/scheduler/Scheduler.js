import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../statecontext/stateContext";
import Styles from "./Scheduler.module.css";
import SubjectOverlay from "./SubjectOverlay.js";

function Appointment() {
  const {
    days,
    setDays,
    userid,
    appointments,
    showoverview,
    setShowOverview,
  } = useContext(StateContext);
  //const [taken, setTaken] = useState(Styles.appointment);

  const [singleuserbooking, setSingleUserBooking] = useState({});
  const [dayofmonth, setDayofmonth] = useState();
  const [monthofyear, setMonthofyear] = useState();
  const [newdate, setNewDate] = useState();

  useEffect(() => {
    const boy = new Date();
    setDayofmonth(boy.getDay());
    setMonthofyear(boy.getMonth());
    const dog = days.filter(
      (element) => Date.parse(element[0]["datecal"]) > Date.parse(boy)
    );
    setNewDate(dog);
  }, [days]);
  //console.log(boy.getMonth());
  //function infooverlay() {
  //return;
  //}

  useEffect(() => {
    for (let i = 0; i < appointments.length; i++) {
      if (userid === appointments[i]["userid"]) {
        const fish = appointments[i];
        setSingleUserBooking(fish);
      }
    }
  }, [userid, appointments]);

  return (
    <div className={Styles.holderholder}>
      <h3>
        Appointment Picker - you have {singleuserbooking["nextmonth"]}{" "}
        appointments in the next four weeks (limit:{" "}
        {singleuserbooking["allowance"]})
      </h3>
      <div className={Styles.holder}>
        {newdate !== undefined
          ? newdate.map((entry, idn) => (
              <div
                key={idn}
                className={
                  (new Date(entry[0].datecal).getDay() === dayofmonth) &
                  (new Date(entry[0].datecal).getMonth() === monthofyear)
                    ? Styles.daytoday
                    : Styles.day
                }
              >
                {entry.map((enter, idz) => (
                  <div key={idz}>
                    {idz !== 0 ? (
                      <h3
                        className={
                          (new Date(entry[0].datecal).getDay() === dayofmonth) &
                          (new Date(entry[0].datecal).getMonth() ===
                            monthofyear)
                            ? enter.isSelected
                              ? enter.idofselector === userid
                                ? Styles.appointmentnotakeme
                                : Styles.appointmentnotaken
                              : Styles.appointmentnobook
                            : enter.isSelected
                            ? enter.idofselector === userid
                              ? Styles.appointmenttakenme
                              : Styles.appointmenttaken
                            : Styles.appointment
                        }
                        id={enter.id}
                        onClick={() =>
                          enter.idofselector === 0 ||
                          enter.idofselector === userid
                            ? Date.parse(entry[0].datecal) >
                              Date.parse(new Date()) + 86400000
                              ? setShowOverview(
                                  <SubjectOverlay fromabove={enter} />
                                )
                              : ""
                            : ""
                        }
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
      {showoverview}
    </div>
  );
}

export default Appointment;
