import { heroes } from "../../data/heroe";


export const getHeroesByPublisher = (publisher) => {
   
    const validPublisher = ['DC Comics','Marvel Comics']; 

    if(!validPublisher.includes(publisher)){ 
        //si NO "publisher" incluye "validPublisher"
    // saltara error 
    // 
    throw new Error(`Publisher "${publisher}" no es correcto `)
    }
    return heroes.filter(hero => hero.publisher === publisher );
    //esto sera lo que filtrara 
    //lo heroes q realmente queremos

}
