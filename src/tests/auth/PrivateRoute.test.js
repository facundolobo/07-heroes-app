

import { mount } from "enzyme/build"
import { MemoryRouter } from "react-router-dom";
//import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe('Pruebas en <PrivateRoute/>', () => {
    
    
    //necesita porque el componente lo pide
    const props={ 
        location:{
            pathname:'/marvel'
        } 
    }
    

    test('debe de mostrar el componente si esta autenticado y guardar localStore', () => {
        const wrapper=mount(
            //para probar Router con rutas
            <MemoryRouter>

                <PrivateRoute 
                    isAuthenticated = {true}
                    component={()=> <span>Listo!</span>}
                     {...props}//lo envio
    
                />

            </MemoryRouter>
        );    
        console.log(wrapper.html());
        expect( wrapper.find('span').exists() ).toBe(true);

        
    })
    test('debe de autenticar el name del usuario', () => {
        
    })
})
