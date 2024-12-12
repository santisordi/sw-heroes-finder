import { useEffect, useState } from "react"

export function useSearch (){
    const [search, updateSearch] = useState('')
    const [error, setError] = useState<string | null>(null)
    
    useEffect(()=>{
      if (search === ''){
        setError('Can search an empty Hero')
        return
      }
    
      if(search.length < 3){
        setError ("La búsqueda debe tener al menos 3 caracteres")
        return
      }
  
      }, [search])
      
      return{ search, updateSearch, error}
  }