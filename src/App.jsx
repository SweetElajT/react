import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Artur Kupś 113809</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 100000)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
