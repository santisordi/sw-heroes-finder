export interface Hero {
    id: string;
    name: string;
    gender: string;
    height: string;
    mass: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    image?: string;
    url: string 
  }


export interface SearchHeroesParams {
  search: string;
  page?: number; 
}
  