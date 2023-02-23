import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';



export const FormWithCustomHook = () => {

    const { onInputChange , onResetForm , username , email , password }  = useForm({
        username:"",
        email: "",
        password: ""
    })
    //const { username , email ,password } = formState;
/*
    useEffect(() => {
     // console.log('useEffect called!');
    },[]);
    
    useEffect(() => {
      //  console.log('FormState called!');
    },[formState]);
    
    useEffect(() => {
       // console.log('email called!');
    },[email]);
*/
  return (
   <>
   <h1>Form</h1>

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
    <input
        type="password"
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value= { password }
        onChange={ onInputChange }
       
        />

        <button onClick={ onResetForm }   className='btn btn-primary mt-2'> RESET </button>
    
   </>
  )
}
