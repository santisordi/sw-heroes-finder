import { render, screen } from "@testing-library/react";
import { Heroes } from "./heroes";

const heroesMock = [
  {
    id: 1,
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    gender: "male",
    skin_color: "fair",
    image: "https://example.com/luke-skywalker.jpg",
    url: "https://swapi.dev/api/people/1/",
  },
  {
    id: 2,
    name: "C-3PO",
    height: 167,
    mass: 75,
    gender: "n/a",
    skin_color: "gold",
    image: "https://example.com/c-3po.jpg",
    url: "https://swapi.dev/api/people/2/",
  },
  {
    id: 3,
    name: "R2-D2",
    height: 96,
    mass: 32,
    gender: "n/a",
    skin_color: "white, blue",
    image: "https://example.com/r2-d2.jpg",
    url: "https://swapi.dev/api/people/3/",
  },
];

describe("Heroes Component", () => {
  it("should render heroes list when heroes are available", () => {
    render(<Heroes heroes={heroesMock} isSearchPerformed={true} />);

    // Verifica si los nombres de los héroes están en el documento
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });

  it('should render "No Heroes" message when no heroes are available and search has been performed', () => {
    render(<Heroes heroes={[]} isSearchPerformed={true} />);

    // Verifica si el mensaje de "No heroes found" aparece
    expect(screen.getByText("Sorry... no Heroes found.")).toBeInTheDocument();
  });

  it("should render nothing if there are no heroes and search has not been performed", () => {
    render(<Heroes heroes={[]} isSearchPerformed={false} />);

    // Verifica que nada se renderiza
    expect(
      screen.queryByText("Sorry... no Heroes found.")
    ).not.toBeInTheDocument();
  });
});
