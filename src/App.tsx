import { useState, useEffect, useCallback } from "react";

// Word List --------------------------------------------------------
import wordList from "./data/wordList.json";
// ------------------------------------------------------------------

// Containers and Components ----------------------------------------
import { HangmanDrawing } from "@root/components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord/HangmanWord";
// ------------------------------------------------------------------

// Styles -----------------------------------------------------------
import "./App.css";
import { Keyboard } from "./components/Keyboard";
// ------------------------------------------------------------------

function getWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((prevState) => [...prevState, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    setIncorrectLetters(
      guessedLetters.filter((letter) => !wordToGuess.includes(letter))
    );

    setIsWinner(
      wordToGuess.split("").every((letter) => guessedLetters.includes(letter))
    );

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="hangman-container">
      {wordToGuess !== "" && (
        <>
          {isWinner && "Winner! - Refresh to try again"}
          {incorrectLetters.length >= 6 && "Nice Try - Refresh to try again"}
          <HangmanDrawing numOfGuesses={incorrectLetters.length} />
          <HangmanWord
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
          <div style={{ alignSelf: "stretch" }}>
            <Keyboard
              disabled={isWinner || incorrectLetters.length >= 6}
              addGuessedLetter={addGuessedLetter}
              activeLetters={guessedLetters.filter((letter) =>
                wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
            />
          </div>
        </>
      )}

      {wordToGuess === "" && <p>Press Enter to start the Game!!</p>}
    </div>
  );
}

export default App;
