import { useFetchPeople } from '../../hooks/useFetchPeoples';
import { Results } from './Results/Results';
import { Search } from './Search/Search';
import styles from './Main.module.scss';
import { useState } from 'react';

export function Main() {
  const [nameSearch, setNameSearch] = useState('');
  const { peoples, loading, error } = useFetchPeople('');

  return (
    <main className={styles.main}>
      <Search nameSearch={nameSearch} setNameSearch={setNameSearch} />
      <Results
        peoples={peoples}
        loading={loading}
        error={error}
        nameSearch={nameSearch}
      />
    </main>
  );
}
