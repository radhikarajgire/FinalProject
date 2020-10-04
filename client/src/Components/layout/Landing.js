import React from "react";
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }


  return (
    <section className ="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Speak Languages Better</h1>
          <p className="lead">
            Get free language coaching on your speaking with lots of fun
            exercises,games and tests Take Your Speaking to the Next Level
          </p>
          <div className="buttons">
            <Link to ='/register' class="btn btn-primary">
            Teachers:Sign Up
            </Link>
            <Link to='/login' class="btn btn-light">
              Login:Students
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
Landing.propTypes= {
  isAuthenticated: PropTypes.bool
}
 const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
 });

 
export default connect (mapStateToProps)(Landing);
