import "./App.css";
import { Heroes } from "./components/heroes/heroes";
import { useHeroes, useSearch } from "./hooks";

function App() {
  const { heroes: mappedHeroes} = useHeroes()
  const { search, updateSearch, error} = useSearch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    // const form = event.target as HTMLFormElement;
    // const {query} = Object.fromEntries(new window.FormData(form)) 
    console.log({search});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    updateSearch(newQuery)
   
  }
 
  return (
    <div className="container">
      <header>
        <h1>SW Heroes Finder</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" onChange={handleChange} value={search} placeholder="Luke, Darth, Leia..." />
          <button type="submit" >Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Heroes heroes={mappedHeroes}/> 
      </main>
    </div>
  );
}

export default App
