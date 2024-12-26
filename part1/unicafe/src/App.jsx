import { useState } from "react";
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good * 100) / all;
  return (
    <div>
      <h2>Statistics</h2>
      {(good + neutral + bad !== 0) ? (
        <p>
          <span>good {good}</span> <br />
          <span>neutral {neutral}</span> <br />
          <span>bad {bad}</span> <br />
          <span>all {all}</span> <br />
          <span>average {average}</span> <br />
          <span>positive {positive} %</span>
        </p>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = [
    { text: "good", handleClick: handleGoodClick },
    { text: "neutral", handleClick: handleNeutralClick },
    { text: "bad", handleClick: handleBadClick },
  ];
  function handleGoodClick() {
    setGood((prev) => prev + 1);
  }
  function handleNeutralClick() {
    setNeutral((prev) => prev + 1);
  }
  function handleBadClick() {
    setBad((prev) => prev + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        {buttons.map((btn) => (
          <Button
            key={btn.text}
            text={btn.text}
            handleClick={btn.handleClick}
          />
        ))}
      </div>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
