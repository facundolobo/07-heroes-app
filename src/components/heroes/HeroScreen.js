import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({history}) => {
    
    const {heroeId} = useParams();
    

    const hero=useMemo(() => getHeroById(heroeId) , [heroeId])

    //console.log('Hero: ',hero, 'HeroId:' ,heroeId )

    if(!hero){ //si quiere ingresar un heroe q no existe por url 
        return <Redirect to="/" /> //retorna a marvel
    }

    const handleReturn=()=>{
        if(history.lenght <=2 ){
            history.push('/');
        }else{
            
            history.goBack(); //redirecciono a la pag x defecto  q es marvel

        }
    }

    //desestructuramos lo obtenido de hero
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `../assets/heroes/${heroeId}.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />    
            </div>

            <div className="col-8">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher:</b> {publisher} </li>
                    <li className="list-group-item"> <b> First appearance:</b> {first_appearance} </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
