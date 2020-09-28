import React, { useEffect, useState, useContext, useRef } from "react";
import Styles from "./TeacherQuestion.module.css";
import { StateContext } from "../statecontext/stateContext";
import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
//import logo from "./logo.svg";

function TeacherMessage() {
  const { userid } = useContext(StateContext);
  const [messagesstudentone, setMessageStudentOne] = useState([]);
  //{ from: 0, mess: "you smell" },
  //{ from: 1, mess: "go away" },
  //{ from: 1, mess: "leave me alone" },
  //{ from: 0, mess: "sorry" },

  useEffect(() => {
    //localStorage.clear("mestuone");
    const dog = JSON.parse(localStorage.getItem("mestuone"));

    if (!dog) {
      console.log("me");
      return;
    }
    setMessageStudentOne(dog);
    for (let i = 0; i < dog.length; i++) {
      if (dog[i]["from"]) {
        addResponseMessage(dog[i]["mess"]);
      } else {
        addUserMessage(dog[i]["mess"]);
      }
    }

    //localStorage.setItem("mestuone", JSON.stringify(messagesstudentone));
  }, []);

  const handleNewUserMessage = (newMessage) => {
    //localStorage.removeItem("mestuone");
    const fish = newMessage;
    setMessageStudentOne((prev) => [...prev, { from: userid, mess: fish }]);

    localStorage.setItem("mestuone", JSON.stringify(messagesstudentone));
    //console.log(JSON.parse(localStorage.getItem("mestuone")));
    //console.log(messagesstudentone);
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Talk to me"
        subtitle="Messages from Student "
      />
    </div>
  );
}

export default TeacherMessage;
