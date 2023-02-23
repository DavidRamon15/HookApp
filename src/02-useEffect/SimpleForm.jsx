import React, { useEffect, useState } from 'react'
import { Message } from './message';

export const SimpleForm = () => {

    const [formState, setfformState] = useState({
        username:"David",
        email: "s@gmail.com"
    })

    const { username , email } = formState;

    const onInputChange = ({target}) =>{
        
        const {name , value} = target;
        
        setfformState({
            ...formState,
            [name] : value
        })

    }


    useEffect(() => {
     // console.log('useEffect called!');
    },[]);
    
    useEffect(() => {
      //  console.log('FormState called!');
    },[formState]);
    
    useEffect(() => {
       // console.log('email called!');
    },[email]);

    
    


  return (
   <>
   <h1>simple Form</h1>

   <hr></hr>

   <input
        type="text"
        className='form-control'
        placeholder='Username'
        name='username'
        value= { username }
        onChange={ onInputChange }
        />
        
   <input
        type="email"
        className='form-control mt-2'
        placeholder='s@gmail.com'
        name='email'
        value= { email }
        onChange={ onInputChange }
       
        />
        {
            (username === 'David2') && <Message />
        }
    
   
   </>
  )
}
