import { useQuery } from '@tanstack/react-query'
import type { QueryFunction } from '@tanstack/react-query'

const useFetch = (keys: string, fn: QueryFunction) => {
  const query = useQuery({ queryKey: [keys], queryFn: fn })

  return query
}

export default useFetch
