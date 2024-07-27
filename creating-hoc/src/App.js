import './App.css';

const PanelMouseLogger = ({ mousePosition}) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className='BasicTracker'>
      <p>Mouse position:</p>
      <div className='Row'>
        <span>X: {mousePosition.x}</span>
        <span>y: {mousePosition.y} </span>
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
