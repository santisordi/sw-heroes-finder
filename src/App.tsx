import { useCallback, useState } from "react";
import "./App.css";
import { Heroes } from "./components/heroes/heroes";
import { useHeroes, useSearch } from "./hooks";
import debounce from 'just-debounce-it'
import { Header } from "./components/header/Header";
import { SearchForm } from "./components/searchForm/SearchForm";
import { Loader } from "./components/loader/Loader";

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
      <Header /> 
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSort={handleSort} 
      />
        {error && <p style={{color: 'red'}}>{error}</p>}
      <main>
        {
          loading ? <Loader />: 
          <Heroes heroes={heroes}/> 
        }
      </main>
    </div>
  );
}

export default App
