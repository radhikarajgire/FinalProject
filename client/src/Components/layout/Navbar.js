import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { StateContext } from "../statecontext/stateContext";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  }
}));

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const { openSidebar, setOpenSidebar } = useContext(StateContext);
  const classes = useStyles();

  const authLinks = (
    <div className="Navbar--actions">
      <Typography variant="button">
        <Link className="Navbar--link" to="/dashboard">
          <i className="fas fa-user" /> <span>Dashboard</span>
        </Link>
      </Typography>
      <Typography>
        <a className="Navbar--link" onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" /> <span>Logout</span>
        </a>
      </Typography>
    </div>
  );
  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Teachers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <AppBar position="static">
      <Toolbar className="Navbar">
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenSidebar(!openSidebar)}
            edge="start"
            className={clsx(classes.menuButton, openSidebar && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h4" color="inherit">
          <Link className="Navbar--link" to="/">
            {" "}
            RThree Academy
          </Link>
        </Typography>
        {authLinks}
        {/*
{!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
*/}
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
