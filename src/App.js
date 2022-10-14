import logo from './logo.svg';
import './App.css';
import React from 'react';
import ConfettiGenerator from "confetti-js";

function App() {
  const confettiSettings = { target: 'my-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  const conrender = React.useEffect(() => {
    confetti.render();

    return () => confetti.clear();
  }, []);
  return (
    <>
    <button onClick={()=>confetti.clear()}>Cancel</button>
      <canvas id="my-canvas" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </canvas>
    </>
  );
}

export default App;
