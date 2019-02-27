import React, { Fragment } from "react";
import TextFieldGroup from "../common/TextFieldGroup";

export default ({
  firstName,
  lastName,
  birthday,
  email,
  cell,
  phone,
  onChange
}) => (
  <Fragment>
    <div className="row">
      <div className="col-md-4">
        <TextFieldGroup
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
      <div className="col-md-4">
        <TextFieldGroup name="lastName" value={lastName} onChange={onChange} />
      </div>
      <div className="col-md-4">
        <TextFieldGroup name="birthday" value={birthday} onChange={onChange} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <TextFieldGroup name="email" value={email} onChange={onChange} />
      </div>
      <div className="col-md-4">
        <TextFieldGroup name="cell" value={cell} onChange={onChange} />
      </div>
      <div className="col-md-4">
        <TextFieldGroup name="phone" value={phone} onChange={onChange} />
      </div>
    </div>
  </Fragment>
);
