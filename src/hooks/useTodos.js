import { useReducer, useRef, useEffect } from "react"

import { todoReducer } from "../08-useReducer/todoRecuder"


const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}
const initialState =[ ];

export const useTodos = () => {
    const [ todos, dispatch ] = useReducer( todoReducer , initialState, init );

    //Usamos este effect para Añadir el elemento al localStorage
    useEffect(() => {
        localStorage.setItem('todos' ,JSON.stringify(todos) || [] ) ;
    }, [todos])

    //Llama a la funcion de Añadir del TodoReducer
    const handleNewTodo = ( todo ) => {
        dispatch({
            type: 'Add Todo',
            payload: todo
        });
    }
    //Llama a la funcion de Eliminar del TodoReducer
    const handleDeleteTodo = ( id ) =>{ 
        dispatch({
            type: 'Remove Todo',
            payload: id
        });
    }
    //Llama a la funcion de Modificiar el done del TodoReducer
    const handleToggleTodo = ( id ) =>{  
       dispatch({
            type: 'Toggle Todo',
            payload: id
        }); 
    }

    const todosCount =  todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done ).length;


  return {
    todos, 
    todosCount,
    pendingTodosCount,
    handleNewTodo, 
    handleDeleteTodo, 
    handleToggleTodo
    }
  
}
