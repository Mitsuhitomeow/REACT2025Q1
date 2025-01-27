import { useEffect, useState } from 'react';
import { PeopleFetchProps } from '../types/interface';

export function useFetchPeople(query: string) {
  const [peoples, setPeoples] = useState<PeopleFetchProps>({ results: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (!query) return (query = 'https://swapi.dev/api/people/');
        const response = await fetch(query);
        if (!response.ok) {
          throw new Error('Failed to fetch data: error');
        }
        const data = await response.json();
        setPeoples(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { peoples, loading, error };
}
