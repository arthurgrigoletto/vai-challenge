import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";

export default ({ fields, history, onChange, handleSubmit }) => {
  const {
    firstName,
    lastName,
    email,
    cell,
    phone,
    birthday,
    street,
    city,
    state,
    registeredAge,
    registeredDate
  } = fields;
  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <h3 className="text-left">General</h3>
      <div className="row">
        <div className="col-md-4">
          <TextFieldGroup
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div className="col-md-4">
          <TextFieldGroup
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div className="col-md-4">
          <TextFieldGroup
            name="birthday"
            value={birthday}
            onChange={onChange}
          />
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
      <hr className="custom-hr mt-5 mb-4" />
      <h3 className="text-left">Address</h3>
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
      <hr className="custom-hr mt-5 mb-4" />
      <h3 className="text-left">Experiences</h3>
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
      <div className="action mt-4">
        <button className="btn btn-excluir" onClick={() => history.goBack()}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-profile">
          Confirmar
        </button>
      </div>
    </form>
  );
};
