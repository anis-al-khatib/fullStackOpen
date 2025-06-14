import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const nextAnecdote = () => {
    const selection = Math.floor(Math.random() * anecdotes.length);
    setSelected(selection);
  };

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const votesCopy = [ ...votes ]

  const voteAnecdote = () => {
    votesCopy[selected] += 1;
    setVotes(votesCopy)
  };
  const highestVoted = anecdotes[getHighest(votes)]
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{ anecdotes[selected] }</p>
      <p>Votes: { votes[selected] }</p>
      <Button onClick={nextAnecdote} text={"Next Anecdote"} />
      <Button onClick={voteAnecdote} text={"Vote"} />
      <h1>Highest Votes Anecdote</h1>
      <p>{ highestVoted }</p>
      <em>with <strong>{ votes[getHighest(votes)] }</strong> votes</em>
    </>
  );
};

  function getHighest(array) {
    let base = 0
    let highest
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= base) {
        base = array[i]
        highest = i
      }
    }
    return highest
  }
export default App;
