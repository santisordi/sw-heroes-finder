import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./Pagination";
import { describe, it, vi } from "vitest";

describe("Pagination Component", () => {
  const mockSetCurrentPage = vi.fn(); // Mock para setCurrentPage

  const defaultProps = {
    heroesPerPage: 10,
    totalHeroes: 50,
    currentPage: 1,
    setCurrentPage: mockSetCurrentPage,
  };

  it("should render correct number of page links", () => {
    render(<Pagination {...defaultProps} />);
    const pageLinks = screen.getAllByText(/^\d+$/); // Busca por texto numérico (1, 2, 3...)
    expect(pageLinks).toHaveLength(5); // 50 héroes / 10 por página = 5 páginas
  });

  it("should disable 'Previous' button on the first page", () => {
    render(<Pagination {...defaultProps} />);
  const previousButton = screen.getByText("Previous");
  expect(previousButton).toHaveClass("is-disable"); // Comprueba la clase CSS
  });

  it("should disable 'Next page' button on the last page", () => {
    render(<Pagination {...defaultProps} currentPage={5} />);
  const nextButton = screen.getByText("Next page");
  expect(nextButton).toHaveClass("is-disable"); // Comprueba la clase CSS
  });

  it("should call setCurrentPage when clicking on a page link", () => {
    render(<Pagination {...defaultProps} />);
    const pageLink = screen.getByText("2"); // Enlace para la página 2
    fireEvent.click(pageLink); // Simula clic en el enlace
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2); // Debe cambiar a la página 2
  });

  it("should call setCurrentPage when clicking on 'Next page'", () => {
    render(<Pagination {...defaultProps} />);
    const nextButton = screen.getByText("Next page");
    fireEvent.click(nextButton); // Simula clic en el botón "Next page"
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2); // La página actual + 1
  });

  it("should call setCurrentPage when clicking on 'Previous' page", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);
    const previousButton = screen.getByText("Previous");
    fireEvent.click(previousButton); // Simula clic en el botón "Previous"
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2); // La página actual - 1
  });
});
