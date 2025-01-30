import { useFetchPeople } from '../../hooks/useFetchPeoples';
import { Results } from './Results/Results';
import { Search } from './Search/Search';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';

export function Main() {
  const { peoples, loading, error } = useFetchPeople('');
  const [nameSearch, setNameSearch] = useState('');
  const [nameResult, setNameResult] = useState(peoples.results || []);

  useEffect(() => {
    setNameResult(peoples.results || []);
  }, [peoples]);

  return (
    <main className={styles.main}>
      <Search
        peoples={peoples}
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setNameResult={setNameResult}
      />
      <Results loading={loading} error={error} nameResult={nameResult} />
    </main>
  );
}
