import "./App.css";
import Login from "./Login.js";
import Success from "./Success.js";
import Failure from "./Failure.js";

function App() {
  return (
    <div className="App">
      <Login />
      <Success />
      <Failure />{" "}
    </div>
  );
}

export default App;
