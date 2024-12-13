import "./App.css";
import {
  useHeroes,
  useHeroSelection,
  useSearch,
  useSearchForm,
  useSort,
} from "./hooks";
import { Header, Heroes, Loader, Pagination, SearchForm } from "./components";

const App: React.FC = () => {
  const { sort, handleSort } = useSort();
  const { search, setSearch, error } = useSearch();
  const {
    heroes,
    loading,
    getHeroes,
    currentPage,
    setCurrentPage,
    totalHeroes,
    heroesPerPage,
    lastIndex,
    firstIndex,
    isSearchPerformed,
  } = useHeroes({
    search,
    sort,
  });
  const { handleSubmit, handleChange } = useSearchForm({
    getHeroes,
    setSearch,
  });
  const { showPagination } = useHeroSelection();

  const paginatedHeroes = heroes.slice(firstIndex, lastIndex);

  return (
    <div className="page">
      <Header />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
        error={error}
        handleSort={handleSort}
        sort={sort}
      />
      <main>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <Heroes
            heroes={paginatedHeroes}
            isSearchPerformed={isSearchPerformed}
          />
        )}
      </main>
      {showPagination && (
        <Pagination
          heroesPerPage={heroesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalHeroes={totalHeroes}
        />
      )}
    </div>
  );
};

export default App;
