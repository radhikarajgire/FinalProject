import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { StateContext } from "../statecontext/stateContext";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ReactPlayer from "react-player";

import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#0093c4",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
}));

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const { openSidebar, setOpenSidebar, choice, playmusic, volsp } = useContext(
    StateContext
  );
  const classes = useStyles();

  const authLinks = (
    <div className="Navbar--actions">
      <Typography variant="button">
        <Link className="Navbar--link" to="/teacher">
          <i className="fas fa-user" /> <span>Teacher</span>
        </Link>
      </Typography>
      <Typography>
        <a className="Navbar--link" onClick={logout} href="/">
          <i className="fas fa-sign-out-alt" /> <span>Logout</span>
        </a>
      </Typography>
    </div>
  );

  return (
    <AppBar position="static" className={classes.AppBar}>
      <ReactPlayer
        volume={volsp}
        playing={playmusic}
        width="0px"
        height="0px"
        controls={false}
        url={choice}
      />
      <Toolbar className="Navbar">
        {isAuthenticated && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenSidebar(!openSidebar)}
            edge="start"
            className={clsx(classes.menuButton, openSidebar)}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h4" color="inherit">
          <Link className="Navbar--link" to="/">
            {" "}
            RThree Academy
          </Link>
        </Typography>
        {authLinks}
        {/*!loading && <Fragment>{isAuthenticated && authLinks}</Fragment>*/}
      </Toolbar>
    </AppBar>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
