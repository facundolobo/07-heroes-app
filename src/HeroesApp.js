import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

    //estado inicial de la app
const init= () =>{ //buscamos el usuario en la memoria del navegador, 
    //si no lo encuentra cambia el estado a false
    return JSON.parse(localStorage.getItem('user')) || {logged : false}
}

export const HeroesApp = () => {
    
    const [user, dispatch] = useReducer(authReducer, {}, init);


    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user))
    }, [user])


    return (

        <AuthContext.Provider value={{user,dispatch }}>

            <AppRouter/>
        
        </AuthContext.Provider>
    )
}
