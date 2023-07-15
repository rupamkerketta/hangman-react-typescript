// Styles -----------------------------------------------------------
import "./HangmanWord.scss";
// ------------------------------------------------------------------

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord(props: HangmanWordProps) {
  const { wordToGuess, guessedLetters } = props;

  return (
    <div className="hangman-word-container">
      {wordToGuess.split("").map((letter, idx) => {
        return (
          <div className="letter-container" key={idx}>
            <span
              className="letter"
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
}
