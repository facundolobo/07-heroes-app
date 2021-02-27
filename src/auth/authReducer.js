import { types } from "../types/types";

export const authReducer = (state = [] ,action ) =>{ //cambiamos el estado segun la variable types

    switch (action.type) {

        case types.login:
            return { 
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
    
        default:
            break;
    }
}