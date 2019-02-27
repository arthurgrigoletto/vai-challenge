import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";

class ProfilesFeed extends Component {
  render() {
    const { profiles, onHandleDelete } = this.props;
    return profiles.map(profile => (
      <ProfileItem
        key={profile.login.uuid}
        profile={profile}
        onHandleDelete={onHandleDelete}
      />
    ));
  }
}

ProfilesFeed.propTypes = {
  profiles: PropTypes.array.isRequired
};

export default ProfilesFeed;
