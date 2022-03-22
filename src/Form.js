import React from "react";

function Form() {
  const usernameDefault = "jsparrow9";
  const passwordDefault = "blackpearlrockz!";
  const emailDefault = "captainjack@gmail.com";

  function getInputs(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const emailInput = document.getElementById("email").value;
    if (
      usernameInput === usernameDefault &&
      passwordInput === passwordDefault &&
      emailInput === emailDefault
    ) {
      console.log("success");
    } else {
      console.log("try again");
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
          type="text"
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
