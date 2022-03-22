import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>Username</label>
        <input type="text" className="form-control mb-3"></input>
        <label>Password</label>
        <input type="text" className="form-control mb-3"></input>
        <label>Email</label>
        <input type="email" className="form-control mb-3"></input>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
