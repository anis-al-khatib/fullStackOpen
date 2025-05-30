import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value, type }) => {
  if (type.toLowerCase() === "rate") {
    return (
      <tr>
        <td>
          <strong>
            <em>{text}</em>
          </strong>
        </td>
        <td> {value}%</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          <strong>
            <em>{text}</em>
          </strong>
        </td>
        <td> {value}</td>
      </tr>
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
          <table>
            <tbody>
              <StatisticLine type="num" text="Good" value={good} />
              <StatisticLine type="num" text="Neutral" value={neutral} />
              <StatisticLine type="num" text="Bad" value={bad} />
              <StatisticLine type="num" text="All" value={total} />
              <StatisticLine type="num" text="Average" value={average} />
              <StatisticLine
                type={"rate"}
                text="Positive"
                value={positiveRate}
              />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default App;
