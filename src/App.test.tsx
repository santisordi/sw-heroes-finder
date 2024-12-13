import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { vi } from "vitest";

vi.mock("./hooks", () => ({
  useHeroes: vi.fn(() => ({
    heroes: [
      { id: 1, name: "Luke Skywalker" },
      { id: 2, name: "Leia Organa" },
    ],
    loading: false,
    getHeroes: vi.fn(),
    currentPage: 1,
    setCurrentPage: vi.fn(),
    totalHeroes: 2,
    heroesPerPage: 1,
    lastIndex: 1,
    firstIndex: 0,
    isSearchPerformed: true,
  })),
  useHeroSelection: vi.fn(() => ({
    showPagination: true,
  })),
  useSearch: vi.fn(() => ({
    search: "",
    setSearch: vi.fn(),
    error: null,
  })),
  useSearchForm: vi.fn(() => ({
    handleSubmit: vi.fn((e) => e.preventDefault()),
    handleChange: vi.fn(),
  })),
  useSort: vi.fn(() => ({
    sort: false,
    handleSort: vi.fn(),
  })),
}));

test("renders App and allows searching for heroes", async () => {
  render(<App />);

  // Verifica que se renderizan elementos clave
  expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
  expect(screen.getByPlaceholderText(/Luke, Leia, Anakin/i)).toBeInTheDocument(); // Search input
  expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument(); // Submit button

  // Interactúa con la barra de búsqueda
  const searchInput = screen.getByPlaceholderText(/Luke, Leia, Anakin/i);
  fireEvent.change(searchInput, { target: { value: "Luke" } });

  // Simula el envío del formulario
  const submitButton = screen.getByRole("button", { name: /buscar/i });
  fireEvent.click(submitButton);

  // Espera que los héroes sean renderizados
  await waitFor(() => {
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });

  // Verifica la paginación
  expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
});
