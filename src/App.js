import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <iframe
        src="https://rohitsonawanetech.matomo.cloud/index.php?module=Widgetize&action=iframe&moduleToWidgetize=Dashboard&actionToWidgetize=index&idSite=1&period=week&date=yesterday"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height="100%"
      ></iframe>

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
