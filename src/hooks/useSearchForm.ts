import debounce from 'just-debounce-it'
import { FormEventWithChange, FormEventWithTarget, UseSearchFormProps, UseSearchFormReturn } from '../lib/definitions/search'
import { useCallback } from 'react';

export function useSearchForm({ getHeroes, setSearch }: UseSearchFormProps) : UseSearchFormReturn {
  // Debounce for search delay
  const debouncedGetHeroes = useCallback(
    debounce((search : string) => {
      getHeroes({ search }) 
    }, 500),
    [getHeroes]
  )

  const handleSubmit = (event: FormEventWithTarget) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    getHeroes({ search : input.value });

  };

  const handleChange = (event: FormEventWithChange) => {
    const newSearch = event.target.value;
    if(newSearch.startsWith(' ')) return
    setSearch(newSearch);
    debouncedGetHeroes(newSearch);
  };

  return { handleSubmit, handleChange }
}
 