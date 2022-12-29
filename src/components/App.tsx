import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Keyboard from "./Keyboard";
import Confetti from "react-confetti";

interface IKeyboard {
  letter: string;
  id: string;
  isRight: boolean;
  isWrong: boolean;
}

function App() {
  const [secretWord, setSecretWord] = useState<string>("");
  const [keyboard, setKeyboard] = useState<IKeyboard[]>(generateKeyboard());
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [count, setCount] = useState<number>(10);
  const [win, setWin] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => setSecretWord(JSON.stringify(data).toUpperCase()));
  }, [keyboard]);

  const hiddenSecretWord = secretWord
    .replace(/"/gi, "")
    .replace("[", "")
    .replace("]", "")
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  // check for winning-condition each time a correct guess is made
  useEffect(() => {
    if (hiddenSecretWord.includes("_")) {
      setWin(false);
    } else setWin(true);
  }, [hiddenSecretWord]);

  // check for game over-condition each time count updates
  useEffect(() => {
    if (count == 0) {
      setFail(true);
    }
  }, [count]);

  function generateKeyboard() {
    const keyboardArr: string[] = [];

    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);

      keyboardArr.push(letter);
    }
    return keyboardArr.map((letter) => {
      return {
        letter,
        id: nanoid(),
        isRight: false,
        isWrong: false,
      };
    });
  }

  function handleClick(id: any) {
    keyboard.map((letter) => letter.id === id);

    {
      if (secretWord.includes(id.letter)) {
        setCorrectGuesses([...correctGuesses, id.letter]);
        id.isRight = true;
      } else {
        setCount(count - 1);

        id.isWrong = true;
      }
    }
  }

  function restartGame() {
    // reset everything to default values
    setFail(false);
    setWin(false);
    setCount(10);
    setCorrectGuesses([]);
    setKeyboard(generateKeyboard());
  }

  const winElement = (
    <>
      <Confetti />
      <h1>CONGRATULATIONS!</h1>
      <div className="restart-btn" onClick={() => restartGame()}>
        <h2 className="key">Play again</h2>
      </div>
    </>
  );

  const failElement = (
    <>
      <h1>GAME OVER!</h1>
      <div className="restart-btn" onClick={() => restartGame()}>
        <h2 className="key">Play again</h2>
      </div>
    </>
  );

  return (
    <>
      <main>
        <h1 className="title">Hangman</h1>

        {win ? (
          winElement
        ) : fail ? (
          failElement
        ) : (
          <>
            <h3 className="instructions">{count} guesses left!</h3>
            <h1>{hiddenSecretWord}</h1>

            <div className="keyboard-container">
              {keyboard.map((x) => (
                <Keyboard
                  key={x.id}
                  value={x.letter}
                  isWrong={x.isWrong}
                  isRight={x.isRight}
                  handleClick={() => handleClick(x)}
                />
              ))}
            </div>
          </>
        )}
        <p>©2022 Greve Groggula</p>
      </main>
    </>
  );
}

export default App;
