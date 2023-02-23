import { TodoItem } from "../../../src/08-useReducer/TodoItem";
import { TodoApp } from "../../../src/08-useReducer/TodoApp";
import {  fireEvent, render,  screen } from "@testing-library/react";
import { useTodos } from "../../../src/hooks/useTodos";

jest.mock('../../../src/hooks/useTodos');

describe('Pruebas con <TodoApp />', () => { 

    useTodos.mockReturnValue({
        todos:[
            {id :1, description:'Todo #1', done : false},
            {id :2, description:'Todo #2', done : true},

        ], 
        todosCount:2,
        pendingTodosCount:1,
        handleNewTodo:jest.fn(), 
        handleDeleteTodo:jest.fn(), 
        handleToggleTodo:jest.fn()
    });
    
    test('debe de mostrar el componente correctamente', () => { 

        render(<TodoApp />);
       expect(screen.getByText('Todo #1') ).toBeTruthy();
       expect(screen.getByText('Todo #2') ).toBeTruthy();
       expect(screen.getByRole('textbox') ).toBeTruthy();
        // screen.debug();


     });



 })