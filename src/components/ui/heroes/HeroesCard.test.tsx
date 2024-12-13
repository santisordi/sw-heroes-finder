import { render, screen } from "@testing-library/react";
import { Hero } from "../../../lib/definitions/heroes";
import { HeroesCard } from "./HeroesCard";

const mockHero: Hero = {
  id: 1,
  name: "Luke Skywalker",
  gender: "male",
  height: 1.72,
  mass: 77,
  skin_color: "fair",
  image: "/assets/images/heroImages/luke-skywalker.webp", 
  url: "http://swapi.dev/api/people/1/",
};

describe("HeroesCard", () => {
  it("should render hero details correctly", () => {
    render(<HeroesCard hero={mockHero} />);

    expect(screen.getByText(mockHero.name)).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${mockHero.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`Heigth: ${mockHero.height}`)).toBeInTheDocument();
    expect(screen.getByText(`Mass:${mockHero.mass}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Skin Color: ${mockHero.skin_color}`)
    ).toBeInTheDocument();

    const heroImage = screen.getByAltText(mockHero.name) as HTMLImageElement;
    const expectedImageUrl = `/assets/images/heroImages/${mockHero.name.toLowerCase().replace(/\s+/g, '-')}.webp`;
    expect(heroImage.src.replace('http://localhost:3000', '')).toBe(expectedImageUrl);
  });
});
