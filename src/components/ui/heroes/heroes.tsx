import { HeroesProps } from "../../../lib/definitions/heroes";
import { HeroesDetail } from "./HeroesDetail";

export function ListOfHeroes({ heroes }: HeroesProps) {
  return <HeroesDetail heroes={heroes} />;
}

export function Heroes({
  heroes,
  isSearchPerformed,
}: HeroesProps & { isSearchPerformed: boolean }) {
  const hasHeroes = heroes?.length > 0;

  return (
    <>
      {hasHeroes ? (
        <ListOfHeroes heroes={heroes} />
      ) : isSearchPerformed ? (
        <NoHeroesResults />
      ) : null}
    </>
  );
}

export function NoHeroesResults() {
  return <p>Sorry... no Heroes found.</p>;
}
