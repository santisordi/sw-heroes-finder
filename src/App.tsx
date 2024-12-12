import "./App.css";
import { Heroes } from "./components/heroes/heroes";
import { useHeroes } from "./hooks/useHeroes";

function App() {
  const { heroes: mappedHeroes} = useHeroes()

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
        <Heroes heroes={mappedHeroes}/> 
      </main>
    </div>
  );
}

export default App;
