import React, { useState } from 'react'

function StateCounterSample() {

  const [counter, setCounter] = useState<number>(0);
  const [times, setTimes] = useState(0);


  const counterCount = () => {

  }

  const increase = () => {
    setTimes(times + 1);
    setCounter(counter + 10);
  }

  return (
    <>
      <h1>Counter Times: {times}</h1>
      <h1>Number: {counter}</h1>
      <button onClick={increase}>Click Counter</button>
    </>
  )
}

export default StateCounterSample