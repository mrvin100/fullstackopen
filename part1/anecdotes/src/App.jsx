import { useState } from "react";

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
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  function getRandomInt() {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  }

  function handleVote() {
    const copy = [...points];
    copy[selected] += 1;
    setMostVoted(copy.indexOf(Math.max(...copy)));
    setPoints(copy);
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>
          {anecdotes[selected]}
          <br />
          has {points[selected]} votes
        </p>
        <div>
          <button onClick={handleVote}>vote</button>
          <button onClick={getRandomInt}>next anecdote</button>
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>
          {anecdotes[mostVoted]}
          <br />
          has {points[mostVoted]} votes
        </p>
      </div>
    </>
  );
};

export default App;
