import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { StateContext } from "./Components/statecontext/stateContext";
import Coordinators from "./Components/Coordinators/Coordinators.js";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Alert from "./Components/layout/Alert";
// import Dashboard from "./Components/dashboard/Dashboard";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Teacher from "./Components/teacher/Teacher";
import Routes from "./Components/routing/Routes";
import { LOGOUT } from './actions/types';
//Redux

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

/*import MenuBar from "./Components/menubar/MenuBar.js";
import Header from "./Components/header/Header.js";
import FlashCard from "./Components/flashcard/FlashCard.js";
import Snap from "./Components/snap/Snap.js";
import WordSearch from "./Components/wordsearch/WordSearch.js";
import MultiTest from "./Components/multitest/MultiTest.js";
import Match from "./Components/match/Match.js"
import SpellShot from "./Components/spellshot/SpellShot.js"
import StudyPartners from "./Components/studypartners/StudyPartners.js"
import PoshOrNot from "./Components/poshornot/PoshOrNot.js"
import ListeningPractice from "./Components/listeningpractice/ListeningPractice.js"
import FooterTwo from "./Components/footertwo/FooterTwo.js";*/
//import MDBFooter from "./Components/footer/footer.js";

//<img src={logo} className="App-logo" alt="logo" />

const App = () => {
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

  // function Appe() {
  //   const { menuitem } = useContext(StateContext);
  //const [singlerender, setSingleRender]=useState()

  //useEffect(()=>{
  //const renderarray = {ba: <FlashCard/>, bb: <Snap/>, bc: <WordSearch/>, ca: <ListeningPractice/>,cb: <MultiTest/>, da: <SpellShot/>, dd: <PoshOrNot/>, de: <Match/>, eb: <StudyPartners/>}
  //const singre = renderarray[menuitem]
  //setSingleRender(singre)},[menuitem])

  return (
    //     <Provider store={store}>
    //       <Router>
    //         <Fragment>
    //           <Navbar />
    //           <Route exact path="/" component={Landing} />
    //           <section className="container">
    //             <Alert />
    //             <Switch>
    //               <Route exact path="/register" component={Register} />
    //               <Route exact path="/login" component={Login} />
    //               <PrivateRoute exact path="/teacher" component={Teacher} />

    //             </Switch>
    //           </section>
    //         </Fragment>
    //       </Router>
    //     </Provider>
    //   );
    // }
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
