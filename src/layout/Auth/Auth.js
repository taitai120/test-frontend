import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Auth() {
  const [name, setName] = useState("admin");
  const [psw, setPsw] = useState("123123");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "admin" && psw === "123123") {
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "admin", psw: "123123" })
      );
      history.push("/admin");
    } else {
      alert("name: admin; password: 123123");
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            name="psw"
            value={psw}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Auth;
