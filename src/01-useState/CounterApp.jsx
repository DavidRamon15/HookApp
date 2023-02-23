import React, { useState } from 'react'

export const CounterApp = () => {
  
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    })
    
    const{counter1,counter2, counter3} = state;
  
    return (
    <>
    <h1>CounterApp : { counter1 }</h1>
    <h1>CounterApp : { counter2 }</h1>
    <h1>CounterApp : { counter3 }</h1>
    
    <hr></hr>
    
    <button className='btn btn-success'
        onClick={
            
            () => setCounter({
                ...state,
                counter1 : counter1+1,

            } )
            
        }>+1</button>
    
    <button className='btn btn-danger' onClick={() => setCounter(counter1 - 1)}>-1</button>
    </>
  )
}
