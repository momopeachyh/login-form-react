import React from "react";
import { useNavigate } from "react-router";

function Form(props) {
  let navigate = useNavigate();

  function getInputs(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const emailInput = document.getElementById("email").value;
    if (
      usernameInput === props.credentials.username &&
      passwordInput === props.credentials.password &&
      emailInput === props.credentials.email
    ) {
      navigate("/success");
    } else {
      navigate("/failure");
    }
  }

  return (
    <div className="App">
      <form>
        <label>Username</label>
        <input
          type="text"
          className="form-control mb-3"
          id="username"
          required
        ></input>
        <label>Password</label>
        <input
          type="password"
          className="form-control mb-3"
          id="password"
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          className="form-control mb-3"
          id="email"
          required
        ></input>
        <button className="btn btn-primary" onClick={getInputs}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Form;
