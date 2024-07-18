import { useEffect } from "react";

const Example2 = () => {
  useEffect(() => {
    const input = document.getElementById("text-Input");
    const textList = document.getElementById("textList-container");
    const onKeyDown = (event) => {
      if (event?.key === "Enter") {
        event.preventDefault();
        const inputText = event?.target?.value;
        const isH1 = inputText.startsWith("/1");
        const textType = isH1 ? "h1" : "p";

        const textElement = document.createElement(textType);
        textElement.innerText = inputText.replace(/^\/1/, "");

        textList.appendChild(textElement);
        event.target.value = "";
      }
    };
    input.addEventListener("keydown", onKeyDown);
    return () => input.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="example-container">
      <div id="textList-container"></div>
      <input
        id="text-Input"
        placeholder="Example 2 - Using a more vanilla JS approach, following the test instructions"
        className="p-input"
      />
    </div>
  );
};

export default Example2;
