import "./App.css";
import { Header, Heroes, Loader, SearchForm } from "./components";
import { useHeroes, useSearch } from "./hooks";
import { useSearchForm } from "./hooks/useSearchForm";
import { useSort } from "./hooks/useSort";


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
        error={error}
        search={search}
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
