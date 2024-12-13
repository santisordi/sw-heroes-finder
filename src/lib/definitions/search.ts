  // Propiedades del hook que maneja la lógica del formulario
  export interface UseSearchFormProps {
    getHeroes: (params: { search: string }) => void;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
  }

  // eventos del formulario y campos de entrada
  export type FormEventWithTarget = React.FormEvent<HTMLFormElement>;
  export type FormEventWithChange = React.ChangeEvent<HTMLInputElement>;

  // Retorno del hook que maneja la lógica del formulario
  export interface UseSearchFormReturn {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  // Estado y manejo del contexto de búsqueda
  export interface UseSearchReturn {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    error: string | null;
  }

  export interface SearchFormProps extends UseSearchFormReturn {
    search: string; 
    error: string | null; 
    sort: boolean; 
    handleSort: () => void; 
  }


