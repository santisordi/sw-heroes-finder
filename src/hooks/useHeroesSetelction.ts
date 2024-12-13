import { useState } from "react";
import { Hero } from "../lib/definitions/heroes";

export function useHeroSelection() {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [showPagination, setShowPagination] = useState<boolean>(true);

  const selectHero = (hero: Hero) => {
    setSelectedHero(hero);
    setShowPagination(false);
  };

  const deselectHero = () => {
    setSelectedHero(null);
    setShowPagination(true);
  };

  return {
    selectedHero,
    selectHero,
    deselectHero,
    showPagination,
  };
}
