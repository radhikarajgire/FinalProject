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
import Dashboard from "./Components/dashboard/Dashboard";
import PrivateRoute from "./Components/routing/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

//Redux

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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
//<img src={logo} className="App-logo" alt="logo" />

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
};

function Appe() {
  const { menuitem } = useContext(StateContext);
  const classes = useStyles();
  //const [singlerender, setSingleRender]=useState()

  //useEffect(()=>{
  //const renderarray = {ba: <FlashCard/>, bb: <Snap/>, bc: <WordSearch/>, ca: <ListeningPractice/>,cb: <MultiTest/>, da: <SpellShot/>, dd: <PoshOrNot/>, de: <Match/>, eb: <StudyPartners/>}
  //const singre = renderarray[menuitem]
  //setSingleRender(singre)},[menuitem])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <div className={classes.toolbar} />
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

/* <Header />

      <MenuBar />
      {singlerender}
      <FooterTwo />

      <SocialFollow />  

    </div>
  );
}
*/

export default Appe;
