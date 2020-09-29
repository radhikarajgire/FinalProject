import React, { Fragment, useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import { StateContext } from "../statecontext/stateContext";
import BookIcon from "@material-ui/icons/Book";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "blue",
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
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
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
        <div className={classes.drawerHeader}>
          {["Learn"].map((text, index) => (
            <ListItem button key={text}>
              <BookIcon color="primary" fontSize="small" />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </div>
        <div className={classes.drawerHeader}>
          {["Play"].map((text, index) => (
            <ListItem button key={text}>
              <SportsEsportsIcon color="primary" fontSize="small" />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </div>
        <div className={classes.drawerHeader}>
          {["Method"].map((text, index) => (
            <ListItem button key={text}>
              <MusicNoteIcon color="primary" fontSize="small" />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </div>
        <div className={classes.drawerHeader}>
          {["Dictionary"].map((text, index) => (
            <ListItem button key={text}>
              <SpellcheckIcon color="primary" fontSize="small" />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </div>
        <div className={classes.drawerHeader}>
          {["Thesaurus"].map((text, index) => (
            <ListItem button key={text}>
              <MenuBookIcon color="primary" fontSize="small" />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </div>
      </List>
      <List>
        <div className={classes.drawerHeader}>
          {["Appointments"].map((text, index) => (
            <ListItem button key={text}>
              <CalendarTodayIcon color="primary" fontSize="small" />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </div>
      </List>
      <List>
        <div className={classes.drawerHeader}>
          {["Contact Teacher"].map((text, index) => (
            <ListItem button key={text}>
              <PermContactCalendarIcon color="primary" fontSize="medium" />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </div>
      </List>
    </Drawer>
  );
}

export default Sidebar;
