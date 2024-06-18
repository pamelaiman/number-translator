import { useState } from "react";
import Button from "./Components/Button";
import "./App.css";
import { translations } from "./Data/LanguageData"

function App() {
  const [count, setCount] = useState(0);
  const [showEnglish, setShowEnglish] = useState(true);
  const [showJapanese, setShowJapanese] = useState(true);
  const message = language(count, translations);

  function language(number, objects) {
    return objects[number];
  }

  function previousNumber() {
    if (count >= 1) {
      setCount((count) => count - 1);
    } else {
      setCount(0);
    }
  }

  function nextNumber() {
    if (count !== 10) {
      setCount((count) => count + 1);
    }
  }

  function showEnglishOnScreen() {
    setShowEnglish(!showEnglish);
  }
  function randomEng() {
    const rNum = Math.floor(Math.random() * translations.length);
    setCount(rNum);
    setShowJapanese(false);
    setShowEnglish(true);

  }
  function randomJpn() {
    const rNum = Math.floor(Math.random() * translations.length);
    setCount(rNum);
    setShowJapanese(true);
    setShowEnglish(false);

  }

  function showJapaneseOnScreen() {
    setShowJapanese(!showJapanese);
  }

  return (
    <div>
      <h1>Language Practice - Counting</h1>

      <Button callbackFn={previousNumber} buttonText={"⬅️"} />
      <Button callbackFn={nextNumber} buttonText={"➡️"} />
      <Button callbackFn={showEnglishOnScreen} buttonText={"Show/Hide English"} />
      <Button callbackFn={showJapaneseOnScreen} buttonText={"Show/Hide Japanese"} />
      <Button callbackFn={randomEng} buttonText={"Random (English)"} />
      <Button callbackFn={randomJpn} buttonText={"Random (Japanese)"} />

      <div style={{ border: "solid black 2px", padding: 10 }}>
        {showEnglish ? <p>English: {message.english}</p> : "❓"}
        {showJapanese ? <p>Japanese: {message.japanese}</p> : "❓"}
      </div>
    </div>
  );
}
export default App;
