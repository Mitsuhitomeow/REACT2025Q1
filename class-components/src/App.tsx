import { useState } from 'react';
import { useFetchPeople } from './hooks/useFetchPeoples';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export default function App() {
  const [count, setCount] = useState(0);
  const { peoples, loading, error } = useFetchPeople();

  return (
    <>
      <div>
        <Header />

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
        <Footer />
      </div>
    </>
  );
}
