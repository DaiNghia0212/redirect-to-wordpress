import logo from "./logo.svg";
import './App.css';

function App() {
  window.location.href = 'https://gearhead1752.000webhostapp.com';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {"Welcome to Gear Head <3"}
        </p>
      </header>
    </div>
  );
}

export default App;
