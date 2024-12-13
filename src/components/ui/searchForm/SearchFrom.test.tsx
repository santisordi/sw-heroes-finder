import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { SearchForm } from "./SearchForm";

describe("SearchForm Component", () => {
  const defaultProps = {
    handleChange: vi.fn(),
    handleSubmit: vi.fn((e) => e.preventDefault()),
    handleSort: vi.fn(),
    search: "",
    sort: false,
    error: "",
  };

  it("should render all elements correctly", () => {
    render(<SearchForm {...defaultProps} />);

    // Verificar que el input de búsqueda esté presente
    const searchInput = screen.getByPlaceholderText("Luke, Leia, Anakin...");
    expect(searchInput).toBeInTheDocument();

    // Verificar que el checkbox de ordenamiento esté presente
    const sortCheckbox = screen.getByRole("checkbox");
    expect(sortCheckbox).toBeInTheDocument();

    // Verificar que el botón de búsqueda esté presente
    const submitButton = screen.getByText("buscar");
    expect(submitButton).toBeInTheDocument();

    // Verificar que no haya mensaje de error
    expect(screen.queryByText(/error/i)).toBeNull();
  });

  it("should call handleChange when typing in the search input", () => {
    render(<SearchForm {...defaultProps} />);
    const searchInput = screen.getByPlaceholderText("Luke, Leia, Anakin...");

    fireEvent.change(searchInput, { target: { value: "Luke" } });

    expect(defaultProps.handleChange).toHaveBeenCalled();
  });

  it("should call handleSubmit when submitting the form", () => {
    render(<SearchForm {...defaultProps} />);
    const form = screen.getByTestId("search-form");
  
    fireEvent.submit(form);
  
    expect(defaultProps.handleSubmit).toHaveBeenCalled();
  });

  it("should call handleSort when clicking the checkbox", () => {
    render(<SearchForm {...defaultProps} />);
    const sortCheckbox = screen.getByRole("checkbox");

    fireEvent.click(sortCheckbox);

    expect(defaultProps.handleSort).toHaveBeenCalled();
  });

  it("should display an error message when error is passed", () => {
    const errorProps = { ...defaultProps, error: "This is an error" };
    render(<SearchForm {...errorProps} />);
  
    const errorMessage = screen.getByText("This is an error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });
});
