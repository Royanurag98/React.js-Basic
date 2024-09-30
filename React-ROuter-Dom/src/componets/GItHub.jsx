import React, { useState } from 'react'

function GItHub() {
    const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);  
  }

  
  return (
    <>
    <button onClick={() => increment()}>+1</button>
    <button onClick={() => {
      increment();
      increment();
      increment();
    }}>+3</button>
    <h1>Score: {score}</h1>
    </>
  )
}

export default GItHub
