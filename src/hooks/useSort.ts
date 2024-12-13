import { useState } from 'react'

export function useSort(initialValue : boolean = false) {
  const [sort, setSort] = useState<boolean>(initialValue)

  const handleSort = () => {
    setSort(prevSort => !prevSort)
  }

  return { sort, handleSort }
}
