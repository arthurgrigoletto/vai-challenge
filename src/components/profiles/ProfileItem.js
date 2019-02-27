import React from "react";
import { Link } from "react-router-dom";
import "./ProfileItem.css";

export default ({ profile }) => {
  const { login, name, picture } = profile;
  return (
    <div className="col-sm-6 mb-5 mt-5">
      <div className="card card-profile z-depth-1-half">
        <div className="card-profile-image ">
          <img
            className="card-img-top z-depth-1-half"
            src={picture.large}
            alt={name.first}
          />
        </div>

        <div className="card-body text-center">
          <h4 className="card-title">{`${name.first} ${name.last}`}</h4>
          <div className="action mt-4">
            <Link
              to={{ pathname: `/${login.uuid}`, state: { profile } }}
              className="btn btn-profile"
            >
              Ver Perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
