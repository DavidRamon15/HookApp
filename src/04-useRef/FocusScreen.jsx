import React, { useRef } from 'react'

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const onclick = () =>{
        inputRef.current.select();
    }


  return (
    <>
        <h1>FocusScreen</h1>
        <hr></hr>
        <input  
            ref={ inputRef }
            type="text"
            placeholder='Ingrese su nombre'
            className='form-control'
            />
        
        <button 
            className='btn btn-primary mt-2'
            onClick={ onclick }>
            Set Focus
        </button>
        
    </>
  )
}
