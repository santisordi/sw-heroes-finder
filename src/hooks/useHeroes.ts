import { useCallback, useState } from "react";
import { Hero } from "../lib/heroes";
import { searchHeroes } from "../services/heroService";

export function useHeroes({ search }: { search: string }) {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getHeroes = useCallback(async () => {
    if (!search) return; // Evita la búsqueda si no hay un término de búsqueda
    try {
      setLoading(true);
      setError(null);

      const newHeroes = await searchHeroes({ search });

      if (newHeroes) {
        setHeroes(newHeroes);
      } else {
        setHeroes([]); // Manejo por si el resultado es null o vacío
      }
    } catch (e: any) {
      setError(e.message); // En caso de error, establece el mensaje
    } finally {
      setLoading(false);
    }
  }, [search]); // Dependencia en 'search' para que se ejecute cuando cambie

  return {
    heroes,
    getHeroes,
    loading,
    error,
  };
}
