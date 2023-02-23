import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {      
        setCounter( (c) => c + value);
      },
      [],
    )
    

   

  return (
            <>
                <h1> use Callbacck Hooks :{ counter }</h1>
                <hr></hr>


                <ShowIncrement increment={incrementFather} />
            </>
  )
}
