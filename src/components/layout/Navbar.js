import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profilesActions";
import { logoutUser } from "../../actions/userActions";

import logo from "../../assets/img/logo.png";
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      limit: 10,
      nat: "BR",
      nats: [
        "AU",
        "BR",
        "CA",
        "CH",
        "DE",
        "DK",
        "ES",
        "FI",
        "FR",
        "GB",
        "IE",
        "IR",
        "NO",
        "NL",
        "NZ",
        "TR",
        "US"
      ]
    };

    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.changeNat = this.changeNat.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  changeNat(region) {
    this.setState({ nat: region });

    this.props.getProfiles(region);
  }

  render() {
    const { nat, nats } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#vaiChallengeNavbar"
            aria-controls="vaiChallengeNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="vaiChallengeNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="regionDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe" />
                  <span className="nat-title ml-1">{nat}</span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right dropdown-secondary"
                  aria-labelledby="regionDropdown"
                >
                  {nats
                    .filter(region => region !== nat)
                    .map(reg => (
                      <button
                        key={reg}
                        className="dropdown-item"
                        onClick={() => this.changeNat(reg)}
                      >
                        {reg.toUpperCase()}
                      </button>
                    ))}
                </div>
              </li>
              <button
                className="logout-button ml-4"
                onClick={this.onLogoutClick}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  { getProfiles, logoutUser }
)(Navbar);
