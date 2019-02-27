import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProfiles, deleteProfile } from "../../actions/profilesActions";
import ProfilesFeed from "./ProfilesFeed";
import "./Profiles.css";
import Navbar from "../layout/Navbar";
import Loading from "../common/Loading";
import Footer from "../layout/Footer";

class ProfileDashboard extends Component {
  componentDidMount() {
    const { profiles } = this.props.profile;
    if (profiles.length === 0) {
      this.props.getProfiles();
    }
  }

  onHandleDelete = id => {
    this.props.deleteProfile(id);
  };

  render() {
    const { profiles, loading } = this.props.profile;
    let profileContent;

    console.log(profiles);

    if (profiles === null || loading) {
      profileContent = <Loading />;
    } else {
      profileContent = (
        <div className="card-deck">
          <ProfilesFeed
            profiles={profiles}
            onHandleDelete={this.onHandleDelete}
          />
        </div>
      );
    }

    return (
      <Fragment>
        <Navbar />
        <div className="profiles">
          <div className="container">{profileContent}</div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

ProfileDashboard.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = {
  getProfiles,
  deleteProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDashboard);
