import React from 'react'
import { heroes } from '../../data/heroe'

export const getHeroesBayName = (name) => {
    
    if (name === ''){ //si manda un string vacio devuelve arreglo vacio
        return []
    }
    name = name.toLocaleUpperCase()
    return heroes.filter(hero => hero.superhero.toLocaleUpperCase().includes(name))
     //   toLocaleUpperCase() pasa a minuscula
    
}
