import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import PageHeader from "./components/PageHeader";
import Toolbar from "./components/ToolBar";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <div className="app-body flex-centered">
        <div className="body-container">
          <Toolbar />
          <h1 className="page-title">Front-end developer test project</h1>
          <hr />
          <div className="flex-row-container">
            <p>
              Your goal is to make a page that looks exactly like this one, and
              has the ability to create H1 text simply by typing / then 1, then
              typing text, and hitting enter.
            </p>
            <Example1 />
            <Example2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
