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
import SocialFollow from ".././socialfollow/SocialFollow.js";
import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

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
    minWidth: "220px",
  },
  drawerLabel: {
    marginLeft: "15px",
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
      background="light-blue" //tried to change only the top of the drawer so it fits with the header color
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
          <ListItem button>
            <BookIcon color="#484848" fontSize="small" />
            <ListItemText primary="Learn" className={classes.drawerLabel} />
          </ListItem>
        </div>
        <div className={classes.drawerHeader}>
          <ListItem button>
            <SportsEsportsIcon color="#484848" fontSize="small" />
            <ListItemText primary="Play" className={classes.drawerLabel} />
          </ListItem>
        </div>
        <div className={classes.drawerHeader}>
          <ListItem button>
            <MusicNoteIcon color="#484848" fontSize="small" />
            <ListItemText primary="Method" className={classes.drawerLabel} />
          </ListItem>
        </div>
        <div className={classes.drawerHeader}>
          <ListItem button>
            <SpellcheckIcon color="#484848" fontSize="small" />
            <ListItemText
              primary="Dictionary"
              className={classes.drawerLabel}
            />
          </ListItem>
        </div>
        <div className={classes.drawerHeader}>
          <ListItem button>
            <MenuBookIcon color="#484848" fontSize="small" />
            <ListItemText primary="Thesaurus" className={classes.drawerLabel} />
          </ListItem>
        </div>

        <div className={classes.drawerHeader}>
          <ListItem button>
            <CalendarTodayIcon color="#484848" fontSize="small" />
            <ListItemText
              primary="Appointments"
              className={classes.drawerLabel}
            />
          </ListItem>
        </div>

        <div className={classes.drawerHeader}>
          <ListItem button>
            <PermContactCalendarIcon color="#484848" fontSize="medium" />
            <ListItemText
              primary="Contact Teacher"
              className={classes.drawerLabel}
            />
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
