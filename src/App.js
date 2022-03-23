import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Success from "./Success.js";
import Failure from "./Failure.js";

function App() {
  const username = "jsparrow9";
  const password = "blackpearlrockz!";
  const email = "captainjack@gmail.com";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="login-form-react/"
            element={
              <Login username={username} password={password} email={email} />
            }
          />
          <Route
            path="login-form-react/success"
            element={<Success username={username} />}
          />
          <Route path="login-form-react/failure" element={<Failure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
