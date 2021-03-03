import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from '../../../types/types'
import '@testing-library/jest-dom'



describe('Pruebas en <Navbar/>', () => {
    //simular el history  
    const historyMock={
        push:jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }
   
    const contextValue ={
        dispatch: jest.fn(), //para indicar si fue llamada con que argumento etc
        user: {
            logged:true,
            name:'Pedro'
        }
    }



    const wrapper = mount(
     <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
            <Router history={historyMock}> {/*por el history enviamos esto* */}  
                <Navbar />
            </Router>
        </MemoryRouter>
    </AuthContext.Provider>
    )

    afterEach(()=>{
        jest.clearAllMocks(); //despues de cada prueba se limpia
    })
    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim() ).toBe('Pedro')
        

    })
    test('debe de llamar el logout y usar history', () => {
        //simulamos un click
        wrapper.find('button').prop('onClick')();
        
        //saber si una funcion fue llamada con estos argumentos
        expect(contextValue.dispatch).toHaveBeenCalledWith({type : types.logout })

        //verificamos si redirecciona a login
        expect(historyMock.replace).toHaveBeenLastCalledWith('/login') 

    })
    
})
