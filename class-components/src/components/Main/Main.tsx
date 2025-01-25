import { useState } from 'react';
import { useFetchPeople } from '../../hooks/useFetchPeoples';
import { Results } from './Results/Results';

export function Main() {
  const [count, setCount] = useState(0);
  const { peoples, loading, error } = useFetchPeople();

  return (
    <main>
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
