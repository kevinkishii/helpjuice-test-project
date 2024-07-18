import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="left-header-container flex-centered">
          <div className="icon-container flex-centered">
            <img
              src="./double-right-arrows.png"
              alt="double right arrows"
              className="double-right-arrows"
            />
          </div>
          <div className="folders-indicator-container">
            <img
              src="./book-open.svg"
              alt="double right arrows"
              className="header-icon"
            />
            <p>Main</p>
            <p>/</p>
            <p>Getting started</p>
            <p>/</p>
            <p>Front-end developer test proje...</p>
          </div>
        </div>
        <div className="right-header-container">
          <p>Editing</p>
          <p>|</p>
          <p>Publish Space</p>
        </div>
      </header>
      <div className="app-body flex-centered">
        <div className="body-container">
          <div className="tool-bar flex-centered">
            <div className="flex-centered"></div>
            <div className="flex-centered right-tool-bar-container">
              <img
                src="./check-circle.svg"
                alt="check icon"
                className="header-icon"
              />
              <img src="./cloud.svg" alt="cloud icon" className="header-icon" />
              <img
                src="./dots-vertical.svg"
                alt="3 dots"
                className="header-icon"
              />
            </div>
          </div>
          <h1 className="page-title">Front-end developer test project</h1>
          <hr />
          <p>
            Your goal is to make a page that looks exactly like this one, and
            has the ability to create H1 text simply by typíng / then 1, then
            typing text, and hitting enter.
          </p>
          <div className="flex-row-container">
            <Example1 />
            <Example2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
