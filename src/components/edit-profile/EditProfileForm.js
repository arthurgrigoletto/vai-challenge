import React from "react";

import ExperiencesFields from "./ExperiencesFields";
import AddressFields from "./AddressFields";
import GeneralFields from "./GeneralFields";

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
      <GeneralFields
        firstName={firstName}
        lastName={lastName}
        email={email}
        cell={cell}
        phone={phone}
        birthday={birthday}
        onChange={onChange}
      />

      <hr className="custom-hr mt-5 mb-4" />
      <h3 className="text-left">Address</h3>
      <AddressFields
        street={street}
        city={city}
        state={state}
        onChange={onChange}
      />

      <hr className="custom-hr mt-5 mb-4" />
      <h3 className="text-left">Experiences</h3>
      <ExperiencesFields
        registeredAge={registeredAge}
        registeredDate={registeredDate}
        onChange={onChange}
      />
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
