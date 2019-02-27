import React, { Component, Fragment } from "react";
import Navbar from "../layout/Navbar";
import "./EditProfile.css";
import EditProfileForm from "./EditProfileForm";
import { updateProfile } from "../../actions/profilesActions";
import { connect } from "react-redux";

class EditProfile extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      cell: "",
      phone: "",
      registeredDate: "",
      registeredAge: "",
      street: "",
      city: "",
      state: "",
      birthday: ""
    };
  }

  componentDidMount() {
    const { profile } = this.props.location.state;
    const {
      name: { first: firstName, last: lastName },
      email,
      cell,
      phone,
      registered: { date: registeredDate, age: registeredAge },
      dob: { date, age },
      location: { street, city, state }
    } = profile;

    const birthday = date.split("T")[0];

    this.setState({
      firstName,
      lastName,
      email,
      cell,
      phone,
      registeredDate,
      registeredAge,
      street,
      city,
      state,
      birthday
    });
  }

  onChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  updateProfile = e => {
    e.preventDefault();
    const { profile } = this.props.location.state;
    const { login, picture } = profile;

    const newProfile = {
      login,
      picture,
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      email: this.state.email,
      cell: this.state.cell,
      phone: this.state.phone,
      registered: {
        date: this.state.registeredDate,
        age: this.state.registeredAge
      },
      location: {
        street: this.state.street,
        city: this.state.city,
        state: this.state.state
      },
      dob: {
        date: this.state.birthday
      }
    };

    this.props.updateProfile(login.uuid, newProfile, this.props.history);
  };

  render() {
    const { profile } = this.props.location.state;
    const { picture } = profile;

    return (
      <Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="jumbotron text-center">
            <div className="view overlay my-4">
              <img src={picture.large} className="img-responsive" alt="" />
              <a href={picture.large} rel="noopener noreferrer" target="_blank">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            <EditProfileForm
              history={this.props.history}
              onChange={this.onChange}
              handleSubmit={this.updateProfile}
              fields={this.state}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { updateProfile }
)(EditProfile);
