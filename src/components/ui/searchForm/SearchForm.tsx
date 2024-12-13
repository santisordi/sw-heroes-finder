import { SearchFormProps } from "../../../lib/definitions/search";

export function SearchForm({
  handleChange,
  handleSubmit,
  handleSort,
  search,
  sort,
  error,
}: SearchFormProps) {
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="search"
        value={search}
        placeholder="Luke, Leia, Anakin..."
        style={{
          border: "1px solid transparent",
          borderColor: error ? "red" : "transparent",
        }}
      />
      Sort by name
      <input type="checkbox" onChange={handleSort} checked={sort} value={search} />
      <button type="submit">buscar</button>
      {error && (
        <p style={{ color: "red" }} className="error">
          {error}
        </p>
      )}
    </form>
  );
}
