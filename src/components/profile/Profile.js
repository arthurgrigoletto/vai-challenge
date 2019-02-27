import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProfile } from "../../actions/profilesActions";
import Navbar from "../layout/Navbar";
import "./Profile.css";

class Profile extends Component {
  onHandleDelete = async id => {
    await this.props.deleteProfile(id);
    this.props.history.goBack();
  };

  render() {
    const { profile } = this.props.location.state;
    const {
      picture,
      login,
      name: { first: firstName, last: lastName },
      email,
      cell,
      phone,
      registered: { date: registeredDate, age: registeredAge },
      dob: { date, age },
      location: { street, city, state }
    } = profile;

    const birthday = date.split("T")[0];

    return (
      <Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="mb-5">
            <a onClick={() => this.props.history.goBack()}>
              <i className="fas fa-arrow-left fa-2x" />
            </a>
          </div>
          <div className="jumbotron text-center">
            <div className="view overlay my-4">
              <img src={picture.large} className="img-responsive" alt="" />
              <a href={picture.large} rel="noopener noreferrer" target="_blank">
                <div className="mask rgba-white-slight" />
              </a>
            </div>

            <h1 className="h1 profile-name mb-2">
              {firstName} {lastName}
            </h1>

            <div className="profile-info">
              <p className="m-0 p-1">{birthday}</p>
              <p className="m-0 p-1">{email}</p>
              <p className="m-0 p-1">
                {phone} | {cell}
              </p>
              <p className="profile-address">
                {street}- {city}/{state}
              </p>
            </div>
            <a className="fa-lg p-2 m-2 li-ic">
              <i className="fab fa-linkedin-in grey-text" />
            </a>
            <a className="fa-lg p-2 m-2 tw-ic">
              <i className="fab fa-twitter grey-text" />
            </a>
            <a className="fa-lg p-2 m-2 fb-ic">
              <i className="fab fa-facebook-f grey-text" />
            </a>

            <hr className="custom-hr mt-5 mb-4" />
            <div className="text-left ml-5">
              <h3>
                <i className="fas fa-suitcase mr-3" />
                <span className="titles">Experiences</span>
              </h3>
              <div className="list-group-flush">
                <div className="list-group">
                  <p className="mb-0 mt-4">
                    <i className="fas fa-circle mr-4 p-3 " aria-hidden="true" />
                    {registeredDate.split("T")[0]} | {registeredAge} years ago
                  </p>
                </div>
              </div>
            </div>
            <hr className="custom-hr mt-5 mb-4" />
            <div className="action mt-4">
              <button
                className="btn btn-excluir"
                onClick={() => this.onHandleDelete(login.uuid)}
              >
                Excluir
              </button>
              <Link
                to={{ pathname: `/${login.uuid}/edit`, state: { profile } }}
                className="btn btn-profile"
              >
                Editar Perfil
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { deleteProfile }
)(Profile);
