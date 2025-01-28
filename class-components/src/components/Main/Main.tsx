import { useFetchPeople } from '../../hooks/useFetchPeoples';
import { Results } from './Results/Results';
import { Search } from './Search/Search';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import { filterPeople } from '../../utils/filterPeople';

export function Main() {
  const { peoples, loading, error } = useFetchPeople('');
  const [nameSearch, setNameSearch] = useState('');
  const [nameResult, setNameResult] = useState(peoples.results || []);

  const handleSearch = () => {
    if (nameSearch.trim() === '') {
      setNameResult(peoples.results || []);
    } else {
      const filteredResults = filterPeople(peoples.results, nameSearch) || [];
      setNameResult(filteredResults);
    }
  };

  useEffect(() => {
    setNameResult(peoples.results || []);
  }, [peoples]);

  return (
    <main className={styles.main}>
      <Search
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        handleSearch={handleSearch}
      />
      <Results loading={loading} error={error} nameResult={nameResult} />
    </main>
  );
}
