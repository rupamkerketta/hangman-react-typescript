// Styles
import "./HangmanDrawing.scss";

const HEAD = <div key="head" className="head"></div>;
const BODY = <div key="body" className="body"></div>;
const RIGHT_ARM = <div key="right-arm" className="right-arm"></div>;
const LEFT_ARM = <div key="left-arm" className="left-arm"></div>;
const RIGHT_LEG = <div key="right-leg" className="right-leg"></div>;
const LEFT_LEG = <div key="left-leg" className="left-leg"></div>;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numOfGuesses: number;
};

export function HangmanDrawing(props: HangmanDrawingProps) {
  const { numOfGuesses } = props;

  return (
    <div className="hangman-drawing-container">
      {BODY_PARTS.slice(0, numOfGuesses)}

      <div className="hanging-tip"></div>
      <div className="top"></div>
      <div className="main"></div>
      <div className="base"></div>
    </div>
  );
}
