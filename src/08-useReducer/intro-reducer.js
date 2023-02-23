

const initialState =[ {
    id:1, 
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

const todoReducer = ( state = initialState , action={} ) =>{

    if(action.type === '[TODO] add todo'){
        return [ ...state, action.payLoad]
    }


    return state;
}


let todos = todoReducer();
//Nuevos Datos
const newTodo = {
    id:2, 
    todo: 'Recolectar la piedra del poder',
    done: false,
}
//Accion 
 const addTodoAction ={
    type:'[TODO] add todo',
    payLoad: newTodo,
 }
//llamada a la funcion  para añadir 
 todos = todoReducer(todos, addTodoAction);

console.log({state: todos});

