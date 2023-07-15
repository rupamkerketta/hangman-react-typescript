// Styles
import "./HangmanDrawing.scss";

const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const RIGHT_ARM = <div className="right-arm"></div>;
const LEFT_ARM = <div className="left-arm"></div>;
const RIGHT_LEG = <div className="right-leg"></div>;
const LEFT_LEG = <div className="left-leg"></div>;

export function HangmanDrawing() {
  return (
    <div className="hangman-drawing-container">
      {HEAD}
      {BODY}
      {LEFT_ARM}
      {LEFT_LEG}
      {RIGHT_ARM}
      {RIGHT_LEG}
      <div className="hanging-tip"></div>
      <div className="top"></div>
      <div className="main"></div>
      <div className="base"></div>
    </div>
  );
}
