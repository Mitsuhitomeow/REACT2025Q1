import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello, world</h1>

        <button onClick={() => setCount((prev: number) => prev + 1)}>Click {count}</button>

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
