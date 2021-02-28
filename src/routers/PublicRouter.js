import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...res //trae todas las otras propiedades
}) => {



    return (
        <Route {...res}
        
            component={(props)=> (
                (!isAuthenticated)
                    ?(<Component {...props} />)
                    :(<Redirect to="/" />)
            )}
        
        />
    )
}
PublicRouter.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired ,
    component: PropTypes.func.isRequired
}