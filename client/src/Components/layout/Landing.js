import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  Button: {
    backgroundColor: "#0093c4",
    "&:hover": {
      backgroundColor: "#0093c4",
    },
  },
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

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Speak Languages Better</h1>
          <p className="lead">
            Get free language coaching on your speaking with lots of fun
            exercises,games and tests Take Your Speaking to the Next Level
          </p>
          <div className="buttons">
           <Link to='/register' className='btn btn-primary'>
              SignUp: Teachers
            </Link>
            <Link to='/login' className='btn btn-light'>
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
