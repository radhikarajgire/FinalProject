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
    studentcolor,
  } = useContext(StateContext);
  //const [taken, setTaken] = useState(Styles.appointment);

  const [singleuserbooking, setSingleUserBooking] = useState({});
  //const [dayofmonth, setDayofmonth] = useState();
  //const [monthofyear, setMonthofyear] = useState();
  const [newdate, setNewDate] = useState();

  useEffect(() => {
    const boy = new Date();
    //setDayofmonth(boy.getDay());
    //setMonthofyear(boy.getMonth());
    const dog = days.filter(
      (element) => Date.parse(element[0]["datecal"]) > Date.parse(boy)
    );
    setNewDate(dog);
  }, [days]);

  useEffect(() => {
    for (let i = 0; i < appointments.length; i++) {
      if (userid === appointments[i]["userid"]) {
        const fish = appointments[i];
        setSingleUserBooking(fish);
      }
    }
  }, [userid, appointments]);

  //you have {singleuserbooking["nextmonth"]}{" "}
  //appointments in the next four weeks (limit:{" "}
  //{singleuserbooking["allowance"]})

  return (
    <div className={Styles.holderholder}>
      {userid === 0 ? (
        <h2 className={Styles.aitchtwo}>Welcome teacher</h2>
      ) : (
        <h2 className={Styles.aitchtwo}>Appointment Picker</h2>
      )}
      <div className={Styles.holder}>
        {newdate !== undefined
          ? newdate.map((entry, idn) => (
              <div
                key={idn}
                className={
                  Date.parse(entry[0].datecal) <
                  Date.parse(new Date()) + 86400000
                    ? Styles.daytoday
                    : Styles.day
                }
              >
                {entry.map((enter, idz) => (
                  <div key={idz}>
                    {idz !== 0 ? (
                      <h5
                        style={
                          userid === 0
                            ? { background: studentcolor[enter.idofselector] }
                            : { color: "black" }
                        }
                        className={
                          userid === 0
                            ? Styles.appointment
                            : Date.parse(entry[0].datecal) <
                              Date.parse(new Date()) + 86400000
                            ? enter.isSelected
                              ? enter.idofselector === userid
                                ? Styles.appointmentnotakenme
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
                          userid === 0
                            ? setShowOverview(
                                <SubjectOverlay fromabove={enter} />
                              )
                            : enter.idofselector === 0 ||
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
                      </h5>
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
