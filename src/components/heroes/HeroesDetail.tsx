import "./HeroesDetail.css";
import { HeroesCard } from "./HeroesCard";
import { HeroesProps } from "../../lib/definitions/heroes";
import { useHeroSelection } from "../../hooks/useHeroesSetelction";

export function HeroesDetail({ heroes }: HeroesProps) {
  const { selectedHero, selectHero, deselectHero } = useHeroSelection();
  return (
    <div className="heroes-detail-container">
      {selectedHero ? (
        <>
          <HeroesCard hero={selectedHero} />
          <button onClick={deselectHero} className="back-button">
            Go Back
          </button>
        </>
      ) : (
        <ul className="heroes">
          {heroes.map((hero) => (
            <li className="hero" key={hero.id} onClick={() => selectHero(hero)}>
              <h2>{hero.name}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
