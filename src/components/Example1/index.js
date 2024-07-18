import { useEffect, useState } from "react";

const Example1 = () => {
  const [inputText, setInputText] = useState("");
  const [isH1, setIsH1] = useState(false);
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    if (!isH1 && inputText.startsWith("/1")) {
      setInputText((prev) => prev.replace(/^\/1/, ""));
      setIsH1(true);
    }
  }, [inputText, isH1]);

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="example-container">
      <div>
        {textList &&
          textList?.map((textObj, index) => {
            if (textObj?.isH1) {
              return (
                <div
                  className="input-flex-container"
                  key={`${textObj?.inputText}-${index}`}
                >
                  <h1>{textObj?.inputText}</h1>
                </div>
              );
            }
            return (
              <div
                className="input-flex-container"
                key={`${textObj?.inputText}-${index}`}
              >
                <p>{textObj?.inputText}</p>
              </div>
            );
          })}
      </div>
      <div className="input-flex-container">
        <input
          className={`${isH1 ? "h1-input" : "p-input"}`}
          placeholder="Example 1 - Using React features, and having a functionality close to Notion"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            if (event?.key === "Enter") {
              event.preventDefault();
              setTextList((prev) => [...prev, { isH1, inputText }]);
              setIsH1(false);
              setInputText("");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Example1;
