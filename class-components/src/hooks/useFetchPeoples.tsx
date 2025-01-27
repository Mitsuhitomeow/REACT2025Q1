import { useEffect, useState } from 'react';
import { PeopleFetchProps } from '../types/interface';
import { API_URL } from '../constants/apiUrl.constant';

export function useFetchPeople(query: string) {
  const [peoples, setPeoples] = useState<PeopleFetchProps>({ results: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = query || API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
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
  }, [url]);

  return { peoples, loading, error };
}
