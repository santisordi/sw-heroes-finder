import { Hero, SearchHeroesParams } from "../lib/definitions/heroes";

export const searchHeroes = async ({ 
    search
 } : SearchHeroesParams): Promise<Hero[] | null> => {
    if(search === '') return null

    try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${search}`)
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
          }
          
        const json = await response.json()
        const heroes = json.results
  
        return heroes?.map((hero: Hero)=> ({
            id: hero.url,
            name: hero.name,    
            gender: hero.gender,
            height: hero.height,
            mass: hero.mass,
            skin_color: hero.skin_color,
          }))
    } catch (e) {
        throw new Error("Error searching heroes: " + (e instanceof Error ? e.message : e));
    }
}