import { useState } from 'react';
import { useFetchPeople } from '../../hooks/useFetchPeoples';
import { Results } from './Results/Results';
import { Search } from './Search/Search';
import styles from './Main.module.scss';

export function Main() {
  const [count, setCount] = useState(0);
  const { peoples, loading, error } = useFetchPeople();

  return (
    <main className={styles.main}>
      <Search />
      <Results
        peoples={peoples}
        loading={loading}
        error={error}
        count={count}
        setCount={setCount}
      />
    </main>
  );
}
