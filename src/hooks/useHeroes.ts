import { useCallback, useRef, useState } from "react";
import { Hero } from "../lib/heroes";
import { searchHeroes } from "../services/heroService";

export function useHeroes({ search, sort }: { search: string, sort: boolean }) {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const previousSearch = useRef(search)

  const getHeroes = useCallback(async () => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search
      const newHeroes = await searchHeroes({ search });

      if (newHeroes) {
        setHeroes(newHeroes);
      } else {
        setHeroes([]);
      }
    } catch (e: any) {
      setError(e.message); 
    } finally {
      setLoading(false);
    }
  }, [search]);

  const sortedHeroes = sort 
  ? [...heroes].sort((a, b) => a.name.localeCompare(b.name))
  : heroes

  return {
    heroes: sortedHeroes,
    getHeroes,
    loading,
    error,
  };
}
