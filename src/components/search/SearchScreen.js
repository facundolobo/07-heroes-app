import React, { useMemo } from 'react'


import queryString from "query-string";

import { useLocation } from 'react-router-dom';


import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesBayName } from '../selectors/getHeroesBayName';

export const SearchScreen = ({history}) => {

    //obtener el valor de el search
    const location =useLocation();
    
    const {q = ''}= queryString.parse(location.search); //separamos lo obtenido y desestructuramos el querie Q
    


    

    //compo imput con useform para rellenar
    const [formValue, handleInputChange]=useForm({
        searchText: '' //se lo establecemos al valor inicial de formulario

    });

    const {searchText} = formValue;

    //filtrado de heroes por nombres 
    




    const heroesFilteredMemo= useMemo(() => getHeroesBayName(q), [q])
    //useMemo(() => computeExpensiveValue(a, b), [a, b]);
    
    const heroesFiltered = heroesFilteredMemo;
    //coloca lo del search en la URL
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="find you hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-online-primary"    
                        >
                            Search... 
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Result </h4>
                    <hr/>

                    {
                        (q === '') 
                        && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>  
                    }
                     
                     {
                        (q !== '' && heroesFiltered.length === 0) 
                        && 
                        <div className="alert alert-danger">
                            there is no a Hero with {q}
                        </div>  
                    }

                    {
                    heroesFiltered.map(hero => ( //muestra todos lo heroes
                        <HeroCard 
                            key={hero.id}
                            {...hero}
                        />
                    ))
                    }


                </div>
            
        </div>
        </div>
        
    )
}
