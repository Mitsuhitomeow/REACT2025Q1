import { ResultsProps } from '../../../types/interface';

export function Results({ loading, error, nameResult }: ResultsProps) {
  return (
    <>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {nameResult.map((prev: { name: string }, id: number) => (
            <li key={id}>{prev.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
