import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ type, value }) => {
  if (type.toLowerCase().includes("rate")) {
    return (
      <p>
        <strong>
          <em>{type}</em>
        </strong>
        : {value}%
      </p>
    );
  } else {
    return (
      <p>
        <strong>
          <em>{type}</em>
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
          <h2>Ratings</h2>
          <Statistics type={"Good"} value={good} />
          <Statistics type={"Neutral"} value={neutral} />
          <Statistics type={"Bad"} value={bad} />
          <hr></hr>
          <h2>Statistics</h2>
          <Statistics type={"Total Ratings"} value={total} />
          <Statistics type={"Ratings Average"} value={average} />
          <Statistics type={"Positive Feedback Rate"} value={positiveRate} />
        </>
      )}
    </div>
  );
};

export default App;
