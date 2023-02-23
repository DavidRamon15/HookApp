import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './small';

export const Memorize = () => {

        const { counter, increment } = useCounter(10);

        const [show, setShow] = useState(true)


  return (
    <>
    
    <h1>Counter:  <Small  value={ counter } /> </h1>
    
    <button className='btn btn-primary mt-2'
            onClick={ () => increment()}
    >+1
    </button>

    <button className='btn btn- mt-2'
      onClick={ () => setShow( !show )}
      >
        Show/Hide { JSON.stringify(show) }
    </button>
    </>
  )
}
