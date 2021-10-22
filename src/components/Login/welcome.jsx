import React from "react";

function Welcome() {
  return (
    <div className="welcome border mt-5 col-md-6 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
      <h2>You are successfully logged in!</h2>
      <a className="btn btn-primary mx-auto" href="/">
        Logout
      </a>
    </div>
  );
}

export default Welcome;
