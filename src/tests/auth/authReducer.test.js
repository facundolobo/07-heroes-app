
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

// const state={
//     name: '',
//     logged:false
// }

   
    test('Debe de retornar el estado por defecto ', () => {
        const state= authReducer( {logged:false} , {} )

        
        expect(state).toEqual({logged:false})
    })

    test('debe de autentificar y colocar el name del usuario ', () => {
        const action={
            type : types.login,
            payload:{
                name: 'fabrizio'
               }
        }
        const state= authReducer( {logged:false} , action )
       

        expect(state).toEqual({
            logged: true,
            name: 'fabrizio'
        })

    })
    test('debe borrar el name y logged en false', () => {
        
        
        const action={
            type : types.logout,
            }

        const state= authReducer( {logged:true , name:'Fabrizio'} , action )
   
        
        //verificamos que se subiera 
        expect(state).toEqual({
            logged: false,
            
        })
        
    })
})