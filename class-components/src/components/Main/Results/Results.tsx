import { ResultsProps } from '../../../types/interface';
import { filterPeople } from '../../../utils/filterPeople';

export function Results({ peoples, loading, error, nameSearch }: ResultsProps) {
  const filterPeopleName = filterPeople(peoples.results || [], nameSearch);

  return (
    <>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filterPeopleName.map((prev: { name: string }, id: number) => (
            <li key={id}>{prev.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
