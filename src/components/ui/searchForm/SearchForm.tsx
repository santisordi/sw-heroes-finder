import { SearchFormProps } from "../../../lib/definitions/search";
import { Button } from "../../button/Button";

export function SearchForm({
  handleChange,
  handleSubmit,
  handleSort,
  search,
  sort,
  error,
}: SearchFormProps) {
  
  return (
    <form className="form" onSubmit={handleSubmit} data-testid="search-form">
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
      Ordena por nombre
      <input type="checkbox" onChange={handleSort} checked={sort} value={search} />
      <Button label="Buscar" parentMethod={()=>handleSubmit} />
      {error && (
        <p style={{ color: "red" }} className="error">
          {error}
        </p>
      )}
    </form>
  );
}
