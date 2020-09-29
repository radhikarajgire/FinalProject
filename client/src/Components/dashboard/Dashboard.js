// import React, { Fragment, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// // import DashboardActions from './DashboardActions';
// import Experience from './Experience';
// import Education from './Education';
// import { getCurrentProfile, deleteAccount } from '../../actions/profile';

// const Dashboard = ({
//   getCurrentProfile,
//   deleteAccount,
//   auth: { user },
//   profile: { profile }
// }) => {
//   useEffect(() => {
//     getCurrentProfile();
//   }, [getCurrentProfile]);

//   return (
//     <Fragment>
//       <h1 className="large text-primary">Dashboard</h1>
//       <p className="lead">
//         <i className="fas fa-user" /> Welcome {user && user.name}
//       </p>
//       {profile !== null ? (
//         <Fragment>
//           <DashboardActions />
//           <Experience experience={profile.experience} />
//           <Education education={profile.education} />

//           <div className="my-2">
//             <button className="btn btn-danger" onClick={() => deleteAccount()}>
//               <i className="fas fa-user-minus" /> Delete My Account
//             </button>
//           </div>
//         </Fragment>
//       ) : (
//         <Fragment>
//           <p>You have not yet setup a profile, please add some info</p>
//           <Link to="/create-profile" className="btn btn-primary my-1">
//             Create Profile
//           </Link>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   deleteAccount: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   profile: state.profile
// });

// export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
//   Dashboard
// );
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
import TeacherQuestion from "../teacherquestion/TeacherQuestion.js";
import FooterTwo from "../footertwo/FooterTwo.js";

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

  // {profile !== null ? (<Fragment>haas</Fragment>) :
  //   (<Fragment><p> No Profile,Please add one </p>
  // <Link to = '/create-profile' className ="btn btn-primary my-1">Create profile</Link>
  // </Fragment>)}
  //{loading && profile === null ? <Spinner /> : <Fragment>
  //      <p className= 'lead'><i className='fas fa-user'> </i>Hola! {user && user.name}</p>

  //    </Fragment>}

  return (
    <div className={Styles.holder}>
      <Header />
      <MenuBar />

      {singlerender}
      <TeacherQuestion />
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
