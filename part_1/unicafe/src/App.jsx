import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const rateAsGood = () => setGood(good + 1)
  const rateAsNeutral = () => setNeutral(neutral + 1)
  const rateAsBad = () => setBad(bad + 1)
  const total = sum(good, neutral, bad)
  const goodRating = 1
  const neutralRating = 0
  const badRating = -1
  const average = (good * goodRating + neutral * neutralRating + bad * badRating) / total
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"Good"} onClick={rateAsGood} />
      <Button text={"Neutral"} onClick={rateAsNeutral} />
      <Button text={"Bad"} onClick={rateAsBad} />
      <h2>Statistics</h2>
      <p><strong>Good</strong>: {good}</p>
      <p><strong>Neutral</strong>: {neutral}</p>
      <p><strong>Bad</strong>: {bad}</p>
      <p><strong><em>Total</em></strong>: {total}</p>
      <p><strong><em>Average</em></strong>: {total !== 0 ? average.toFixed(2) : 0}</p>
      <p><strong><em>Positive</em></strong>: {total !== 0 ? (good / total * 100).toFixed(2) : 0}%</p>
    </div>
  );
};

export default App;

function sum(...nums) {
  let total = 0
  for (const n of nums) {
    if (typeof n === 'number' && !isNaN(n)) {
      total += n
    }
  }
  return total
}