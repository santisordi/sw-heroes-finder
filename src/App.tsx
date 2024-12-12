import "./App.css";
import { Hero } from "./lib/heroes";

import responseHeroes from './mock/heroesMock.json'

function App() {
  
  const heroes: Hero[] = responseHeroes.results
  const hasHeroes = heroes?.length > 0

  return (
    <div className="container">
      <header>
        <h1>SW Heroes Finder</h1>
        <form className="form">
          <input placeholder="Luke, Darth, Leia..." />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        { hasHeroes
        ?(
          <ul>
            {heroes.map((hero : Hero) =>(
              <li key={hero.url}>
                <h3>{hero.name}</h3>
                <p>{hero.gender}</p>
                <p>{hero.films}</p>
                <img src={`/assets/images/heroImages/${hero.name.toLowerCase().replace(/\s+/g, '-')}.webp`} alt="" />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron heroes</p>
        )
      }

      </main>
    </div>
  );
}

export default App;
