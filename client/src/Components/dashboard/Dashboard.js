import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Styles from "./Dashboard.component.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { StateContext } from "../statecontext/stateContext";
import { getCurrentProfile } from "../../actions/profile";
import MenuBar from "../menubar/MenuBar.js";
import Header from "../header/Header.js";
import FlashCard from "../flashcard/FlashCard.js";
import Snap from "../snap/Snap.js";
import WordSearch from "../wordsearch/WordSearch.js";
import MultiTest from "../multitest/MultiTest.js";
import Match from "../match/Match.js";
import SpellShot from "../spellshot/SpellShot.js";
import StudyPartners from "../studypartners/StudyPartners.js";
import PoshOrNot from "../poshornot/PoshOrNot.js";
import ListeningPractice from "../listeningpractice/ListeningPractice.js";
import ExGames from "../exgames/ExGames.js";
import Scheduler from "../scheduler/Scheduler.js";
import FooterTwo from "../footertwo/FooterTwo.js";
import Level1 from "../views/Level1.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  const { menuitem } = useContext(StateContext);
  const [singlerender, setSingleRender] = useState();

  useEffect(() => {
    const renderarray = {
      ba: <FlashCard />,
      bb: <Snap />,
      bc: <WordSearch />,
      ca: <ListeningPractice />,
      cb: <MultiTest />,
      da: <SpellShot />,
      db: <ExGames />,
      dd: <PoshOrNot />,
      de: <Match />,
      eb: <StudyPartners />,
      ga: <Scheduler />,
    };
    const singre = renderarray[menuitem];
    setSingleRender(singre);
  }, [menuitem]);

  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
  
    <div>
      <Header />
      <MenuBar />
      <Level1 />
      {singlerender}
      <FooterTwo />
    </div>
  );
};

Dashboard.propTypes = {
  getCurrrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
