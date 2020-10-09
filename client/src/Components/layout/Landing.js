import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { StateContext } from "../statecontext/stateContext";

const useStyles = makeStyles((theme) => ({
  // Button: {
  //   backgroundColor: "#0093c4",
  //   "&:hover": {
  //     backgroundColor: "#0093c4",
  //   },
  // },
  ButtonLink: {
    color: "white",
    padding: "10px",
    "&:hover": {
      color: "white",
    },
  },
}));

const Landing = ({ isAuthenticated }) => {
  const classes = useStyles();

  const { openSidebar, setOpenSidebar } = useContext(StateContext);
  setOpenSidebar(false);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {/* <h1 className="x-large">Rthree Academy</h1> */}
          <p className="lead">
            Bring your English to the next level, with our experienced language
            teachers, and on top spice it with lots of fun, exercises, games,
            and tests.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              SignUp: Teachers
            </Link>
            <Link to="/login" className="btn btn-light">
              Login: Students
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
