import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo ,onToggleTodo}) => {

    const { id , description } = todo;
    
    

  return (
    <>
       <li key={ id } className="list-group-item d-flex justify-content-between">

          <span 
            className={`aling-self-center  ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
            onClick={ () => onToggleTodo(id) }
            aria-label="span"
          >
            { description }
          </span> 

          <button 
            className="btn btn-danger"
            onClick={() => onDeleteTodo(id) }
            aria-label="btn-delete"
          >
              Borrar
          </button>
        </li>
    </>
  )
}
