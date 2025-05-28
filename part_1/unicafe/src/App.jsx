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
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"Good"} onClick={rateAsGood} />
      <Button text={"Neutral"} onClick={rateAsNeutral} />
      <Button text={"Bad"} onClick={rateAsBad} />
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default App;
