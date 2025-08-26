import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Header from './Header'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import RecentTools from './RecentTools'
import Kpis from './Kpis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="p-3 text-white" style={{ backgroundColor: '#0A0A0A' }}>
          <h1>Internal Tools Dashboard</h1>
          <p>Monitor and manage your organisation's software tools and expenses</p>
          <Kpis />
          <RecentTools />
          {/* Autres sections / contenu */}
        </main>
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
