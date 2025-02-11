import { ResultsProps } from '../../../types/interface';
import { Cards } from './Cards/Cards';

export function Results({ loading, error, nameResult }: ResultsProps) {
  return (
    <>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loading ? <p>Loading...</p> : <Cards nameResult={nameResult} />}
    </>
  );
}
