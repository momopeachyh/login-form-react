import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Success from "./Success.js";
import Failure from "./Failure.js";

function App() {
  const credentials = {
    username: "jsparrow9",
    password: "blackpearlrockz!",
    email: "captainjack@gmail.com",
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login credentials={credentials} />} />
          <Route
            path="/success"
            element={<Success username={credentials.username} />}
          />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
