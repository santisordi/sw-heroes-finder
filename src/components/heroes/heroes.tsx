import { Hero } from "../../lib/heroes";

export function HeroesList({ heroes } : { heroes: Hero[]}) {
  return (
    <ul>
      {heroes.map((hero: Hero) => (
        <li key={hero.id}>
          <h3>{hero.name}</h3>
          <p>{hero.gender}</p>
          <p>{hero.height}</p>
          <img
            src={`/assets/images/heroImages/${hero.name
              .toLowerCase()
              .replace(/\s+/g, "-")}.webp`}
            alt={hero.name}
          />
        </li>
      ))}
    </ul>
  );
}

export function NoRenderHeroes () {
  return (
  <p>No se encontraron heroes</p>
)
};

export function Heroes ( { heroes }:{ heroes: Hero[]}){
    const hasHeroes = heroes?.length > 0
   
   return(
    hasHeroes
        ? <HeroesList heroes={heroes}/>
        : <NoRenderHeroes />     
   )
}