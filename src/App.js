import logo from "./logo.svg";
import "./App.css";


function App() {

  return (
    <div className="container">
      <form>
        <div className="group-form">
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
     
  


        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
