import React, { useState } from 'react'

function StateNumbersSample() {

    const [numbers, setNumbers] = useState<number[]>([]);

    const addNumbers = () => {
        var randomNumbers = Math.floor(Math.random() * 1000);
        setNumbers(...numbers, randomNumbers);
    }
  return (
    <>
    <button onClick={addNumbers}>Generate Numbers</button>
    </>
  )
}

export default StateNumbersSample