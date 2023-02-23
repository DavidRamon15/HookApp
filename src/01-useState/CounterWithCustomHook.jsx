import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'


export const CounterWithCustomHook = () => {
  
  const { counter, increment,decrement, reset } = useCounter(12);
  
  
    return (
    <>
    <h1>CounterWithCustomHook : {counter}</h1>
    <hr></hr>
    
    
    <button className='btn btn-success' onClick={() => increment(2) }>+1</button>
    <button className='btn btn-danger' onClick={() => reset() }>Reset</button>
    <button className='btn btn-warning' onClick={() => decrement(2) }>-1</button>
    </>
    
  )
}
