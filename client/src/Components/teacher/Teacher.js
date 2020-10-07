import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TeacherActions from "./TeacherActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile.js";

const Teacher = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1
        style={{
          textAlign: "center",
          color: "#0093C4 !important",
        }}
        className="large text-primary"
      >
        Teacher
      </h1>
      <p
        style={{
          textAlign: "center",
        }}
        className="lead"
      >
        <i
          className="fas fa-user"
          style={{
            textAlign: "center",
          }}
        />{" "}
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <TeacherActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p
            style={{
              textAlign: "center",
            }}
          >
            You have not yet setup a profile, please add some info
          </p>
          <Link
            to="/create-profile"
            className="btn btn-primary my-1"
            justifyContent="center"
            display="flex"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row,",
              borderRadius: "4px",
            }}
          >
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Teacher.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Teacher
);
