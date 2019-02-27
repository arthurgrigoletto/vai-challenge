import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";

export default ({ street, city, state, onChange }) => (
  <div className="row">
    <div className="col-md-4">
      <TextFieldGroup name="street" value={street} onChange={onChange} />
    </div>
    <div className="col-md-4">
      <TextFieldGroup name="city" value={city} onChange={onChange} />
    </div>
    <div className="col-md-4">
      <TextFieldGroup name="state" value={state} onChange={onChange} />
    </div>
  </div>
);
