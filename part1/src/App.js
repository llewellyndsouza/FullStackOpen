// Type 1

// import React from "react";

// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course.name}</h1>
//     </>
//   );
// };

// const Part = (props) => {
//   return(props.course.parts.map(part=>(
//     <p>{part.name} : {part.exercises}</p>
//   )))
// };

// const Total = (props) => (
//   <>
//     <p>Number of exercises : {props.course.parts.reduce((pre, cur) => pre + cur.exercises, 0)}</p>
//   </>
// );

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Part course={course} />
//       <Total course={course} />
//     </div>
//   );
// };

// export default App;

// Type 2

import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const randomHandler = () => {
    setSelected(parseInt((Math.random() * 100) % 6));
  };

  const upvoteHandler = () => {
    let copy = votes;
    copy[selected] = votes[selected]+1;
    console.log(copy);
    setVotes(copy);
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={randomHandler}>Random</button>
      <p>has {votes[selected]} votes</p>
      <button onClick={upvoteHandler}>Upvote</button>
    </div>
  );
};

export default App;
