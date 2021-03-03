import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../types/types"

describe('Pruebas en <LoginScreen/>', () => {
    //history
    const history={
        
        replace: jest.fn()
    }

    //contexto
    const contextValue ={
        dispatch: jest.fn(), //para indicar si fue llamada con que argumento etc
        user: {
            logged:false,
           
        }
    }

    const wrapper= mount(
        <AuthContext.Provider value={contextValue}>

            <LoginScreen history={ history }/>

        </AuthContext.Provider>
    )

    test('debe de mostrarce correctamente ', () => {
        //snapshot
        expect(wrapper).toMatchSnapshot();
    })


    test('debe realizar el dispatch y la navegación', () => {
        //simular click
        const handleLogin =wrapper.find('button').prop('onClick');

        handleLogin();


        //verificamos si  fue llamada 
        expect(contextValue.dispatch).toBeCalledWith({ //este objeto esta definido en "handleLogin"
            type:types.login,
            payload:{
                     name: 'Facundo' 
                    }
        })
        //verificar que repalce de history haya sido llamado con '/'
        expect(history.replace).toBeCalledWith('/');

        ////verificar que repalce de history haya sido llamado con '/dc' porque cambiamos localStore
        localStorage.setItem('lastPath','/dc')// cambiamos localStore
        
        handleLogin(); //simular click

        //verificar que repalce de history haya sido llamado con '/dc' porque cambiamos localStore
        expect(history.replace).toBeCalledWith('/dc');

    })
})
