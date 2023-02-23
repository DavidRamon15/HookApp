import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { MainApp } from "../../../src/09-useContext/MainApp"
import {  fireEvent, render,  screen } from "@testing-library/react"


describe('Pruebas en <MainApp></MainApp>', () => { 

    test('Debe de mostrar el HomePage', () => { 

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )


        expect(screen.getByText('HomePage')).toBeTruthy();

     })

     
    test('Debe de mostrar el LoginPage', () => { 

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )


        expect(screen.getByText('LoginPage')).toBeTruthy();

     })
 })