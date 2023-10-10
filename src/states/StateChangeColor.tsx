import React, { useState } from 'react'

function StateChangeColor() {

    const [color, setColor] = useState('blue');

    const changeColor = () => {
        setColor('red');
    }
    
  return ( <>
    <p style={{backgroundColor:color}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Nisi est ea iste rem unde facere pariatur vel, quis maiores voluptatibus odit reiciendis, 
    neque consectetur natus officia velit recusandae. Voluptatum, quia.</p>

    <button onClick={changeColor}>Change Color</button>
    <button onClick={() => changeColor()}>Change Color</button>
    </>
  )
}

export default StateChangeColor