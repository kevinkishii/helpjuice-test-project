function PageHeader() {
  return (
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
          <p className="underline">Main</p>
          <p>/</p>
          <p>Getting started</p>
          <p>/</p>
          <p>Front-end developer test proje...</p>
        </div>
      </div>
      <div className="right-header-container">
        <img
          src="./unlock.svg"
          alt="double right arrows"
          className="header-icon"
        />
        <p>Editing</p>
        <p>|</p>
        <p className="purple-text">Publish Space</p>
        <img
          src="./arrow-down.svg"
          alt="double right arrows"
          className="header-icon"
        />
      </div>
    </header>
  );
}

export default PageHeader;
