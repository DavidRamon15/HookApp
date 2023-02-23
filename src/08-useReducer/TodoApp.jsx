import { useReducer, useRef, useEffect } from "react"
import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoRecuder"


export const TodoApp = () => {

    const {todos,todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();

  return (
    <>
        <h1>TodoApp:{ todosCount } <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo ={ handleDeleteTodo }
                    onToggleTodo ={ handleToggleTodo }
                />
            </div>
            <div className="col-5">
               
               <h4>Agregar ToDo</h4>
               <hr></hr>
                {/** TodoAdd onNewTodo{ todo } */}
                <TodoAdd onNewTodo={ handleNewTodo }/>
                {/** Fin TodoAdd */}
            </div>
        </div>

    </>
  )
}

