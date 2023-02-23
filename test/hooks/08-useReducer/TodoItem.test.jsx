import { TodoItem } from "../../../src/08-useReducer/TodoItem";
import {  fireEvent, render,  screen } from "@testing-library/react"


describe('Pruebas en el <TodoItem />', () => { 
    
    const todo ={
        id:1 ,
        description:'Piedra del Alma',
        done:false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () =>{ jest.clearAllMocks(); });
    

    test('Debe de mostrar el todo pendiente de completas', () => { 
        
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
            console.log(spanElement.className);
        expect (spanElement.className).toContain('aling-self-center')
        expect (spanElement.className).not.toContain('text-decoration-line-through')

     });
     test('Debe de mostrar el Todo Completado', () => { 
        todo.done = true; 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
            console.log(spanElement.className);
       
        expect (spanElement.className).toContain('text-decoration-line-through')

     });

     test('Span debe de llamar el ToggleTodo cuando se hace Click ', () => { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith( todo.id );
        
        const btnDeleteElement = screen.getByLabelText('btn-delete');
        fireEvent.click(btnDeleteElement);
        
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

     });
 })