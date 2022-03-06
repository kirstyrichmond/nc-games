import React from "react";
import "../../styles/error.css";

const Error = () => {
  return (
    <div>
      <h2>Restricted Access</h2>
      <p className="redirect-message">
        Please follow
        <a className="redirect" href="/"> this </a>
        link to log in.
      </p>
    </div>
  );
};

export default Error;
