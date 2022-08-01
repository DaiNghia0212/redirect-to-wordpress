import {ReactComponent as ReactLogo} from "../GearHeadLogo.svg";
import "../Redirect.css";
import { useEffect } from "react";

function Redirect({ url }) {
  useEffect(() => {
    setTimeout(() => (window.location.href = url), 5000);
  }, [url]);

  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo className="App-logo"/>
        <p>{"Welcome to GearHead <3"}</p>
      </header>
    </div>
  );
}

export default Redirect;
