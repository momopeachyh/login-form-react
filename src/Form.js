import React from "react";

function Form() {
  // const credentials = {
  //   username: "jsparrow9",
  //   password: "blackpearlrockz!",
  //   email: "captainjack@gmail.com",
  // };

  const usernameDefault = "jsparrow9";
  const passwordDefault = "blackpearlrockz!";
  const emailDefault = "captainjack@gmail.com";

  const defaultCredentials = [usernameDefault, passwordDefault, emailDefault];
  let inputValues = [];

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
      inputValues.push(usernameInput, passwordInput, emailInput);
      console.log(inputValues);
      console.log("element pushed");
      if (inputValues === defaultCredentials) {
        console.log("match");
      }
    }
  }

  return (
    <div className="App">
      <form>
        <label>Username</label>
        <input
          type="text"
          className="form-control mb-3"
          onSubmit={getInputs}
          id="username"
          required
        ></input>
        <label>Password</label>
        <input
          type="password"
          className="form-control mb-3"
          onSubmit={getInputs}
          id="password"
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          className="form-control mb-3"
          onInput={getInputs}
          id="email"
          required
        ></input>
        <button className="btn btn-primary" onSubmit={getInputs}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
