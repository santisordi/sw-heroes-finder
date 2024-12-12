import { useEffect, useRef, useState } from "react"

export function useSearch (){
    const [search, updateSearch] = useState('')
    const [error, setError] = useState<string | null>(null)
    const isFirstInput = useRef<boolean>(true) // flag para saber si el usuario uso o no el input

    useEffect(()=>{
        
    if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
          }
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