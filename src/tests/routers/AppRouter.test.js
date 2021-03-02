import { mount } from "enzyme/build"
import React from 'react';
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe('pruebas es <AppRouter/>', () => {

    //{user,dispatch } esto se requiere segun HeroesApp


    const contextValue ={
        dispatch: jest.fn(), //para indicar si fue llamada con que argumento etc
        user: {
            logged:false
        }


    }
    test('debe de mostrar el login si no esta autenticado ', () => {
        
        const wrapper=mount(
        <AuthContext.Provider value={contextValue} >

            <AppRouter/>

        </AuthContext.Provider>
            
        );

        //console.log(wrapper.html()); //para msotrar si aparece el componente LoginScreen
        expect(wrapper.find('LoginScreen').exists()).toBe(true); 
        
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de mostrar el componente marvel si esta autentificado ', () => {
        
        
        const contextValue ={
            dispatch: jest.fn(), //para indicar si fue llamada con que argumento etc
            user: {
                logged:true,
                name:'Facu'
            }
        }

        const wrapper=mount(
            <AuthContext.Provider value={contextValue} >
    
                <AppRouter/>
    
            </AuthContext.Provider>
                
            );
    
            //console.log(wrapper.html()); //para msotrar si aparece el navbar eso indica q no estamos en login
            expect(wrapper.find('.navbar').exists()).toBe(true);
            
            console.log(wrapper.html());
            //expect(wrapper).toMatchSnapshot();
    })
    

})
