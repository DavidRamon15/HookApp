import React, { useState } from 'react'

import {useForm} from '../hooks/useForm' 


export const TodoAdd = ( { onNewTodo } ) => {

  const {description , onInputChange, onResetForm} = useForm({

    description:''

  })

  const onFormSubmit = (event) =>{
    event.preventDefault();

    if(description.length <= 1) return;

    const newTodo ={
        id: new Date().getTime(),
        done:false,
        description: description
    }

   
    onNewTodo(newTodo);

  }

    

  return (
    <>
        <form onSubmit={ (event) => onFormSubmit(event) }> 
            <input
                type="text"
                placeholder="¿Qué hay que hacer"
                name="description"
                value={description}
                className="form-control"
                onChange={ onInputChange }
            />
            
            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
                > Agregar
            </button>
        </form>
    </>
  )
}
