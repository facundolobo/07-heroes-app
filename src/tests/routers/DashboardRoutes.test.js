import React from 'react';
import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { DashboardRoutes } from "../../routers/DashboardRoutes"

describe('Pruebas en <DashboardRoutes/>', () => {
    
    const contextValue ={
        dispatch: jest.fn(), //para indicar si fue llamada con que argumento etc
        user: {
            logged:true,
            name:'Juanito'
        }
    }
    test('debe mostrarce correctamente ', () => {
        const wreapper=mount(
            
            
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>

                    <DashboardRoutes />

                </MemoryRouter>

            </AuthContext.Provider>
  
        )
        expect(wreapper).toMatchSnapshot();
        //console.log(wreapper.find('.text-info').find('span').html())
        expect(wreapper.find('.text-info').text().trim()).toBe('Juanito')
    })
    
})
