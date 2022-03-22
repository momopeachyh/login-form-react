import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Success from "./Success.js";
import Failure from "./Failure.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/success" component={Success} />
        <Route path="/failure" component={Failure} />
      </Routes>
    </div>
  );
}

export default App;
