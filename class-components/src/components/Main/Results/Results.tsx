import { ResultsProps } from '../../../types/interface';

export function Results({ peoples, loading, error }: ResultsProps) {
  return (
    <>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {peoples.results?.map((prev: { name: string }, id: number) => (
            <li key={id}>{prev.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
