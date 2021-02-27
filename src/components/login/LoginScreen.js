import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';

import { types } from '../../types/types';

export const LoginScreen = ({history}) => { //esta en las props del componente
  
    const {user,dispatch} = useContext(AuthContext)

    

    const handleLogin=()=>{
        //history.push('/'); //redirecciono a la pag x defecto  q es marvel
        //history.replace('/'); //reemplazo en la historia que no visito el login
        //console.log('click');
        // {
        //     name: 'Facundo'
        // }

        dispatch( {
            type:types.login,
            payload:{
                     name: 'Facundo'
                    }
        } )
        history.replace('/');
    }

    
    return (
        <div className="conteiner m-5">
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div> 
        
    )
}