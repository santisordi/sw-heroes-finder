import "./App.css";
import { Heroes } from "./components/heroes/heroes";
import { Hero } from "./lib/heroes";

import responseHeroes from './mock/heroesMock.json'

function App() {
  
  const heroes: Hero[] = responseHeroes.results

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
        <Heroes heroes={heroes}/> 
      </main>
    </div>
  );
}

export default App;
