import { shallow } from "enzyme/build"
import { authReducer } from "../../auth/authReducer";

describe('Pruebas en <authReducer/>', () => {

// const state={
//     name: '',
//     logged:false
// }

    

    test('Debe de retornar el estado por defecto ', () => {
        const state= authReducer( {logged:false} , {} )

        console.log(state);
        expect(state).toEqual({logged:false})
    })

    test('debe de autentificar y colocar el name del usuario ', () => {
        
    })
    test('debe borrar el name y logged en false', () => {
        
    })
    

    
    
    
})
