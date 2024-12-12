import "./App.css";
import { Heroes } from "./components/heroes/heroes";
import { useHeroes, useSearch } from "./hooks";

function App() {
  const { search, updateSearch, error} = useSearch()
  const { heroes, getHeroes, loading } = useHeroes({search})
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    getHeroes()
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }
 
  return (
    <div className="container">
      <header>
        <h1>STAR WARS</h1>
        <h3>Heroes Finder</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" onChange={handleChange} value={search} placeholder="Luke, Darth, Leia..." />
          <button type="submit" >Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>cargando...</p>: 
          <Heroes heroes={heroes}/> 
        }
      </main>
    </div>
  );
}

export default App
