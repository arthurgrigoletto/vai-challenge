import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";

export default ({ registeredAge, registeredDate, onChange }) => (
  <div className="row">
    <div className="col-md-6">
      <TextFieldGroup
        name="registeredAge"
        value={registeredAge.toString()}
        onChange={onChange}
      />
    </div>
    <div className="col-md-6">
      <TextFieldGroup
        name="registeredDate"
        value={registeredDate.split("T")[0]}
        onChange={onChange}
      />
    </div>
  </div>
);
