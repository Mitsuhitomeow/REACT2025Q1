import { ResultsProps } from '../../../types/interface';

export function Results({
  peoples,
  loading,
  error,
  count,
  setCount,
}: ResultsProps) {
  return (
    <>
      <button onClick={() => setCount((prev: number) => prev + 1)}>
        Click {count}
      </button>

      <button onClick={() => setCount(0)}>Reset</button>

      <br />

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {peoples.results?.map((prev: { name: string }, id: number) => {
            return <li key={id}>{prev.name}</li>;
          })}
        </ul>
      )}
    </>
  );
}
