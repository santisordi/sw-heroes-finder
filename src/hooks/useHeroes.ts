import { Hero } from '../lib/heroes';
import responseHeroes from '../mock/heroesMock.json'

export function useHeroes () {

    const heroes = responseHeroes.results
  
    const mappedHeroes: Hero[] = heroes?.map((hero) => ({
      id: hero.url,
      name: hero.name,
      gender: hero.gender,
      height: hero.height,
      mass: hero.mass,
      skin_color: hero.skin_color,
      eye_color: hero.eye_color,
      birth_year: hero.birth_year,
      homeworld: hero.homeworld,
      films: hero.films,
      species: hero.species,
      vehicles: hero.vehicles,
      starships: hero.starships,
      created: hero.created,
      edited: hero.edited,
    }));
  
    return { heroes: mappedHeroes}
  
  }
  