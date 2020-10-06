import React, { useContext } from "react";
//import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  //CssBaseline,
  //AppBar,
  //Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  //ListItemIcon,
  ListItemText,
} from "@material-ui/core";
//import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
//import InboxIcon from "@material-ui/icons/MoveToInbox";
//import MailIcon from "@material-ui/icons/Mail";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import { StateContext } from "../statecontext/stateContext";
import BookIcon from "@material-ui/icons/Book";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SocialFollow from ".././socialfollow/SocialFollow.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#0093c4",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    height: "76px",
  },
  drawerLink: {
    padding: "5px 20px",
  },
  drawerLabel: {
    marginLeft: "15px",
    color: "white",
  },
  content: {
    flexGrow: 1,

    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Sidebar() {
  const { openSidebar, setOpenSidebar } = useContext(StateContext);
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      background="light-blue"
      open={openSidebar}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setOpenSidebar(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <div className={classes.drawerLink}>
          <ListItem button className={classes.drawerLink}>
            <BookIcon color="inherit" fontSize="small" />
            <Link to="/learn">
              <ListItemText
                primary="Learn"
                color="#484848"
                className={classes.drawerLabel}
              />
            </Link>
          </ListItem>
        </div>
        <div className={classes.drawerLink}>
          <ListItem button>
            <CalendarTodayIcon color="inherit" fontSize="small" />
            <Link to="/review">
              <ListItemText
                primary="Review/test"
                className={classes.drawerLabel}
              />
            </Link>
          </ListItem>
        </div>
        <div className={classes.drawerLink}>
          <ListItem button className={classes.drawerLink}>
            <SportsEsportsIcon color="inherit" fontSize="small" />
            <Link to="/play">
              <ListItemText primary="Play" className={classes.drawerLabel} />
            </Link>
          </ListItem>
        </div>
        <div className={classes.drawerLink}>
          <ListItem button>
            <MusicNoteIcon color="inherit" fontSize="small" />
            <Link to="/method">
              <ListItemText primary="Method" className={classes.drawerLabel} />
            </Link>
          </ListItem>
        </div>
        <div className={classes.drawerLink}>
          <ListItem button>
            <SpellcheckIcon color="inherit" fontSize="small" />
            <Link to="/dictionary">
              <ListItemText
                primary="Dictionary"
                className={classes.drawerLabel}
              />
            </Link>
          </ListItem>
        </div>
        <div className={classes.drawerLink}>
          <ListItem button>
            <MenuBookIcon color="inherit" fontSize="small" />
            <Link to="/thesaurus">
              <ListItemText
                primary="Thesaurus"
                className={classes.drawerLabel}
              />
            </Link>
          </ListItem>
        </div>

        <div className={classes.drawerLink}>
          <ListItem button>
            <CalendarTodayIcon color="inherit" fontSize="small" />
            <Link to="/appointments">
              <ListItemText
                primary="Appointments"
                className={classes.drawerLabel}
              />
            </Link>
          </ListItem>
        </div>

        <div className={classes.drawerLink}>
          <ListItem button>
            <PermContactCalendarIcon color="inherit" fontSize="small" />
            <Link to="/teacher">
              <ListItemText primary="Teacher" className={classes.drawerLabel} />
            </Link>
          </ListItem>
        </div>
      </List>
      <Divider />
      <div>
        <SocialFollow />
      </div>
    </Drawer>
  );
}

export default Sidebar;
