import React, { useState } from 'react'

function StateIncreaseSample() {

    const  [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }
  return (
    <>
    <h1>Number: {counter}</h1>
    <button onClick={increase}>Increase</button>
    </>
  )
}

export default StateIncreaseSample