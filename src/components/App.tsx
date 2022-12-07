import { useState } from "react";
import "./App.css";
import Keyboard from "./Keyboard";
// import Keyboard from "react-simple-keyboard";
// import "react-simple-keyboard/build/css/index.css";

function App() {
  const alpha: number[] = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet: string[] = alpha.map((x) => String.fromCharCode(x));

  const [keyboard, setKeyboard] = useState();
  const [secretWord, setSecretWord] = useState("hangman");

  const keyboardElements = alphabet.map((letter: string) => (
    <Keyboard value={letter} />
  ));

  return (
    <main>
      <h1 className="title">Hangman</h1>
      <p className="instructions">Find the right word or he will hang!</p>
      <h1>_ _ _ _ _ _ _</h1>
      <div className="keyboard-container">{keyboardElements}</div>
    </main>
  );
}

export default App;
