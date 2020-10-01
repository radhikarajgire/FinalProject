import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { StateContext } from "./Components/statecontext/stateContext";
import Coordinators from "./Components/Coordinators/Coordinators.js";
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Sidebar from './Components/layout/Sidebar';
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
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


/*if (localStorage.token) {
  setAuthToken(localStorage.token);
}*/
//<img src={logo} className="App-logo" alt="logo" />

/*const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
};*/

function Appe() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Sidebar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/learn" component={Learn} />
              {/*<Route exact path="/learn" component={Play} />
              <Route exact path="/method" component={Method} />
              <Route exact path="/dictionary" component={Dictionary} />
              <Route exact path="/thesaurus" component={Thesaurus} />
              <Route exact path="/appointments" component={Appointments} />
              <Route exact path="/teacher" component={Teacher} /> */}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default Appe;
