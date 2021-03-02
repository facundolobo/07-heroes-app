

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
    
    Storage.prototype.setItem = jest.fn();//para evaluar si es llamada la funcion de "setItem"

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
        //console.log(wrapper.html());
        expect( wrapper.find('span').exists() ).toBe(true); 
        //comprobamos si envia el "span"
        //que enviamos

        expect(localStorage.setItem).toBeCalledWith('lastPath','/marvel') //comprobamos
    })
    test('debe de bloquear el componente si no esta autenticado', () => {
        const wrapper=mount(
            //para probar Router con rutas
            <MemoryRouter>

                <PrivateRoute 
                    isAuthenticated = {false}
                    component={()=> <span>Listo!</span>}
                     {...props}//lo envio
    
                />

            </MemoryRouter>
        );  
        expect( wrapper.find('span').exists() ).toBe(false); //no mostrara el componente
        
        expect(localStorage.setItem).toBeCalledWith('lastPath','/marvel') 
        //comprobamos lo guarda pero igual no muestra el componente 
    })
    
    
})
