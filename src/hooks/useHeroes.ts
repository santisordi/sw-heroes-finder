import { useCallback, useState } from "react";
import { Hero } from "../lib/heroes";
import { searchHeroes } from "../services/heroService";

export function useHeroes({ search }: { search: string }) {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getHeroes = useCallback(async () => {
    if (!search) return; 
    try {
      setLoading(true);
      setError(null);

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

  return {
    heroes,
    getHeroes,
    loading,
    error,
  };
}
