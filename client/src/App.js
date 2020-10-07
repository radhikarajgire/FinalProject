import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import { StateContext } from "./Components/statecontext/stateContext";
//import Coordinators from "./Components/Coordinators/Coordinators.js";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Sidebar from "./Components/layout/Sidebar";
// import Login from "./Components/auth/Login";
// import Register from "./Components/auth/Register";
import Alert from "./Components/layout/Alert";
import Dashboard from "./Components/dashboard/Dashboard";
import PrivateRoute from "./Components/routing/PrivateRoute";
// redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Learn from "./Components/pages/Learn";
import Play from "./Components/pages/Play";
import Review from "./Components/pages/Review";
import Method from "./Components/pages/Method";
import Appointments from "./Components/pages/Appointments";
import Dictionary from "./Components/pages/Dictionary";
//import Teacher from "./Components/pages/Teacher";
import Thesaurus from "./Components/pages/Thesaurus";
import Games from "./Components/exgames/ExGames.js";
import Match from "./Components/match/Match.js";
import SpellShot from "./Components/spellshot/SpellShot.js";
import PoshOrNot from "./Components/poshornot/PoshOrNot.js";
// import Teacher from "./Components/teacher/Teacher";
import Routes from "./Components/routing/Routes";
import Snap from "./Components/snap/Snap.js";
import Flashcard from "./Components/flashcard/FlashCard.js";
import Listening from "./Components/listeningpractice/ListeningPractice.js";
import Knowledge from "./Components/multitest/MultiTest.js";
import LevGam from "./Components/views/Level1.js";
import Learncourse from "./Components/allcourseview/AllCourseViewList.js";
import SingleCourseModule from "./Components/allcourseview/SingleCourseModule.js";
import { LOGOUT } from "./actions/types";

//if (localStorage.token) {
//setAuthToken(localStorage.token);
//}
//<img src={logo} className="App-logo" alt="logo" />

/*const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
};*/

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Sidebar />
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/learn" component={Learn} />
              <Route exact path="/learn/course" component={Learncourse} />
              <Route
                exact
                path="/learn/course/singlecoursemodule"
                component={SingleCourseModule}
              />
              <Route exact path="/play" component={Play} />
              <Route exact path="/play/ExGames" component={Games} />
              <Route exact path="/play/SpellShot" component={SpellShot} />
              <Route exact path="/play/Match" component={Match} />
              <Route exact path="/play/PoshOrNot" component={PoshOrNot} />
              <Route exact path="/play/levelgame" component={LevGam} />
              <Route exact path="/review/Snap" component={Snap} />
              <Route exact path="/review/Flashcard" component={Flashcard} />
              <Route exact path="/review/Listening" component={Listening} />
              <Route exact path="/review/Knowledge" component={Knowledge} />
              <Route exact path="/review" component={Review} />
              <Route exact path="/method" component={Method} />
              <Route exact path="/dictionary" component={Dictionary} />
              <Route exact path="/thesaurus" component={Thesaurus} />
              <Route exact path="/appointments" component={Appointments} />
              {/* <Route exact path="/teacher" component={Teacher} /> */}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
