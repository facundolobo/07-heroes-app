import React from 'react'

export const LoginScreen = ({history}) => { //esta en las props del componente
    
    const handleLogin=()=>{
        //history.push('/'); //redirecciono a la pag x defecto  q es marvel
        history.replace('/'); //reemplazo en la historia que no visito el login
        //console.log('click');
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
