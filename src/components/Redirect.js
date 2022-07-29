import logo from "../web-icon-1.png";
import "../Redirect.css";
import { useEffect } from "react";

function Redirect({ url }) {
  useEffect(() => {
    setTimeout(() => (window.location.href = url), 5000);
  }, [url]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{"Welcome to GearHead <3"}</p>
      </header>
    </div>
  );
}

export default Redirect;
