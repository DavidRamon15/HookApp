import {  fireEvent, render,  screen } from "@testing-library/react"
import { UserContext } from "../../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../../src/09-useContext/LoginPage"




describe('Pruebas en <LoginPage />', () => { 
    
    const setUserMock = jest.fn();

    beforeEach( () =>{ jest.clearAllMocks(); });

    test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage ></LoginPage>
            </UserContext.Provider>
        )
        const newPre = screen.getByLabelText('pre');
        expect(newPre.innerHTML).toBe('null');

     }) 


    test('debe de llamar al setUser cuando se hace click en el boton ', () => { 
        
        render(
            <UserContext.Provider value={ { user:null ,setUser:setUserMock } }>
                <LoginPage></LoginPage>
            </UserContext.Provider>
        )

        const btnCreate = screen.getByLabelText('btn-create');
        fireEvent.click( btnCreate );
        
        expect(setUserMock).toHaveBeenCalledWith({"email": "davidramoncasanova@gmail.com", "id": 123, "name": "David"});
     })


})