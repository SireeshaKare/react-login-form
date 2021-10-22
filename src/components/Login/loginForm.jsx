import React, { useState } from "react";
import axios from "axios";

function LoginForm(props) {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (account.email == "" || account.password == "") {
      setErr("All fields are required");
    } else {
      setErr("");
      axios
        .post("http://localhost:4000/users/signin", account)
        .then((response) => {
          props.history.push("/welcome");
        })
        .catch((error) => {
          if (error.response.status == 401 || error.response.status == 400) {
            setErr(error.response.data.message);
          } else {
            setErr("Something went wrong. Please try again later");
          }
        });
    }
  };

  return (
    <div className="border mt-5 col-md-6 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
      <form className="p-5" onSubmit={handleSubmit}>
        <h2 className="mb-4">Login</h2>
        {err != "" ? <div className="error alert alert-danger">{err}</div> : ""}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
