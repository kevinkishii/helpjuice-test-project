function Toolbar() {
  return (
    <div className="tool-bar flex-centered">
      <div className="flex-centered left-tool-bar-container">
        <div className="flex-centered colored-letter">P</div>
        <div className="flex-centered">|</div>
        <div className="flex-centered">
          <img src="./clock.svg" alt="cloud icon" className="small-icon" />
        </div>
        <div className="flex-centered">0min</div>
        <div className="flex-centered">|</div>
        <div className="flex-centered">
          <img src="./rabbit.png" alt="cloud icon" className="header-icon" />
        </div>
        <div className="flex-centered">|</div>
        <div className="flex-centered">
          <img
            src="./arrow-down-left.svg"
            alt="cloud icon"
            className="small-icon"
          />
        </div>
        <div className="flex-centered">0</div>
      </div>
      <div className="flex-centered right-tool-bar-container">
        <img
          src="./check-circle.svg"
          alt="check icon"
          className="header-icon"
        />
        <img src="./cloud.svg" alt="cloud icon" className="header-icon" />
        <img src="./dots-vertical.svg" alt="3 dots" className="header-icon" />
      </div>
    </div>
  );
}

export default Toolbar;
