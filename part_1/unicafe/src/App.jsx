import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  if (text.toLowerCase().includes("rate")) {
    return (
      <p>
        <strong>
          <em>{text}</em>
        </strong>
        : {value}%
      </p>
    );
  } else {
    return (
      <p>
        <strong>
          <em>{text}</em>
        </strong>
        : {value}
      </p>
    );
  }
};

const App = () => {
  // States
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Event Handlers
  const rateAsGood = () => setGood(good + 1);
  const rateAsNeutral = () => setNeutral(neutral + 1);
  const rateAsBad = () => setBad(bad + 1);

  // Variables
  const total = good + neutral + bad;
  const average = total !== 0 ? ((good - bad) / total).toFixed(2) : 0;
  const positiveRate = total !== 0 ? ((good / total) * 100).toFixed(2) : 0;

  // JSX
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"Good"} onClick={rateAsGood} />
      <Button text={"Neutral"} onClick={rateAsNeutral} />
      <Button text={"Bad"} onClick={rateAsBad} />
      <hr></hr>
      {total === 0 ? (
        <h2>
          <em>No feedback yet . . .</em>
        </h2>
      ) : (
        <>
          <h2>Statistics</h2>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <hr></hr>
          <StatisticLine text="Total Ratings" value={total} />
          <StatisticLine text="Ratings Average" value={average} />
          <StatisticLine text="Positive Feedback Rate" value={positiveRate} />
        </>
      )}
    </div>
  );
};

export default App;
