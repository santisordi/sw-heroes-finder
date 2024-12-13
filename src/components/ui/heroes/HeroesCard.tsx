import { HeroesCardProps } from "../../../lib/definitions/heroes";
import './HeroesCards.css'

export function HeroesCard({ hero }: HeroesCardProps) {
  const heroImage = `/assets/images/heroImages/${hero.name
    .toLowerCase()
    .replace(/\s+/g, "-")}.webp`;

  return (
    <div className="hero-container">
      {
        <div className="hero">
          <h3>{hero.name}</h3>
          <img className="hero-image" src={heroImage} alt={hero.name} />
          <p>Gender: {hero.gender}</p>
          <p>Heigth: {hero.height}</p>
          <p>Mass:{hero.mass}</p>
          <p>Skin Color: {hero.skin_color}</p>
        </div>
      }
    </div>
  );
}
