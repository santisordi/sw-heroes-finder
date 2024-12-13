import "./App.css";
import { Heroes } from "./components/heroes/heroes";
import { useHeroes, useSearch } from "./hooks";
import { Header } from "./components/header/Header";
import { SearchForm } from "./components/searchForm/SearchForm";
import { Loader } from "./components/loader/Loader";
import { useSort } from "./hooks/useSort";
import { useSearchForm } from "./hooks/useSearchForm";

function App() {
  const { search, setSearch, error} = useSearch()
  const { sort, handleSort } = useSort();
  const { heroes, getHeroes, loading } = useHeroes({search, sort})
  const { handleSubmit, handleChange } = useSearchForm({
    getHeroes,
    setSearch,
  });
 
  return (
    <div className="container">
      <Header /> 
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSort={handleSort}
        sort={sort} 
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
