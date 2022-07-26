import logo from "../logo.svg";
import "../Redirect.css";

function Redirect({ url }) {
  window.location.href = url;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{"Welcome to Gear Head <3"}</p>
      </header>
    </div>
  );
}

export default Redirect;
