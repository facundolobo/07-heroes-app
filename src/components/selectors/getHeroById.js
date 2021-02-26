import { heroes } from "../../data/heroe";


export const getHeroById = (id) => {
    
    const validPublisher = ['DC Comics','Marvel Comics']; 

    return heroes.find(hero => hero.id === id );
    //esto sera lo que filtrara encontrara el primero
    //lo heroes q realmente queremos por su id

}