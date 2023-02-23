import {  fireEvent, render,  screen } from "@testing-library/react"
import { UserContext } from "../../../src/09-useContext/context/UserContext"
import { HomePage } from "../../../src/09-useContext/HomePage"


describe('Pruebas en <HomePage></HomePage>', () => { 

    const user ={
        id:1, 
        name:'David'
    }


    test('debe de mostrar el componente sin el usuario ', () => { 

        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage></HomePage>
            </UserContext.Provider>
        )

            const preTag = screen.getByLabelText('pre'); 
            expect(preTag.innerHTML).toBe('null');
     });

    test('debe de mostrar el componenete con el usuario ', () => { 

        render(
            <UserContext.Provider value={{user:user}}>
                <HomePage></HomePage>
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre'); 
        //console.log(preTag.innerHTML)
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());


     })
 })