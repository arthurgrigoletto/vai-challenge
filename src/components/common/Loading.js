import React from "react";
import spinner from "../../assets/img/loading.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "100%", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
