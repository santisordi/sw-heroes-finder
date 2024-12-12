import { useCallback, useState } from "react";
import "./App.css";
import { Heroes } from "./components/heroes/heroes";
import { useHeroes, useSearch } from "./hooks";
import debounce from 'just-debounce-it'

function App() {
  const { search, updateSearch, error} = useSearch()
  const [sort, setSort] = useState(false)
  const { heroes, getHeroes, loading } = useHeroes({search, sort})

  const debouncedHeroes = useCallback(
    debounce(search =>{
      getHeroes({search})
    }, 500),[getHeroes]
  ) 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    getHeroes({search})
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    if(newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    debouncedHeroes(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }
 
  return (
    <div className="container">
      <header>
        <h1>STAR WARS</h1>
        <h3>Heroes Finder</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" onChange={handleChange} value={search} placeholder="Luke, Darth, Leia..." />
          <input type="checkbox" onChange={handleSort} />
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
