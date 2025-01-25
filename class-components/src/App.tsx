import { useState } from 'react';
import { useFetchPeople } from './hooks/useFetchPeoples';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const { peoples, loading, error } = useFetchPeople();

  return (
    <>
      <div>
        <h1>Hello, world</h1>

        <button onClick={() => setCount((prev: number) => prev + 1)}>Click {count}</button>

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
      </div>
    </>
  );
}
