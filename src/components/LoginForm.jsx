import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [account, setAccount] = useState({ email: "", password: "" });

  //const handleSubmit = (e) => {
  //e.preventdefault();
  //Login(account);
  //};

  return (
    <div className="border mt-5 col-md-6 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
      <form className="p-5">
        <h2 className="mb-4">Login</h2>
        {error != "" ? (
          <div className="error alert alert-danger">{error}</div>
        ) : (
          ""
        )}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="username"
            placeholder="name@example.com"
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            value={account.email}
          />
          <label htmlFor="username">Email address</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            value={account.password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          //onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
