import React, { useEffect, useState, useContext, useRef } from "react";
import Styles from "./TeacherQuestion.module.css";
import { StateContext } from "../statecontext/stateContext";
import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
//import logo from "./logo.svg";

function TeacherMessage() {
  const { userid } = useContext(StateContext);
  const [contactwith, setContactWith] = useState(2);
  const [messagesstudentone, setMessageStudentOne] = useState([]);
  const [messengertittle, setMessengerTittle] = useState();

  //{ from: 0, mess: "you smell" },
  //{ from: 1, mess: "go away" },
  //{ from: 1, mess: "leave me alone" },
  //{ from: 0, mess: "sorry" },

  useEffect(() => {
    setMessageStudentOne();
    //localStorage.clear("mestuone");
    var dog;
    if (userid === 0) {
      dog = JSON.parse(localStorage.getItem("User" + contactwith));
      setMessengerTittle("Messages from student " + contactwith);
    } else {
      dog = JSON.parse(localStorage.getItem("User" + userid));
      setMessengerTittle("Messages from student " + userid);
    }

    if (!dog) {
      return;
    }
    setMessageStudentOne(dog);

    for (let i = 0; i < dog.length; i++) {
      if (userid === 0) {
        if (dog[i]["from"] !== 0) {
          addResponseMessage(dog[i]["mess"]);
        } else {
          addUserMessage(dog[i]["mess"]);
        }
      } else {
        if (dog[i]["from"] === 0) {
          addResponseMessage(dog[i]["mess"]);
        } else {
          addUserMessage(dog[i]["mess"]);
        }
      }
    }
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(messagesstudentone);

    const fish = newMessage;
    const paper = messagesstudentone;
    var chips;
    if (paper === undefined) {
      chips = [{ from: userid, mess: fish }];
    } else {
      chips = paper.concat({ from: userid, mess: fish });
    }
    setMessageStudentOne(chips);

    if (userid === 0) {
      localStorage.setItem("User" + contactwith, JSON.stringify(chips));
    } else {
      localStorage.setItem("User" + userid, JSON.stringify(chips));
    }
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Talk to me"
        subtitle={messengertittle}
        showTimeStamp={false}
      />
    </div>
  );
}

export default TeacherMessage;
