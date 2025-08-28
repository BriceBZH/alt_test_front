import { useState } from 'react'
import reactLogo from '../assets/images/react.svg'
import Header from './Header'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import RecentTools from './RecentTools'
import Kpis from './Kpis'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "../pages/Tools";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="d-flex flex-column min-vh-100">
        <Router>
          <Header />
          <main className="p-3 text-white" style={{ backgroundColor: '#0A0A0A' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Tools" element={<Tools />} />
              <Route path="/Analytics" element={<Analytics />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </main>
        </Router>
      </div>
  )
}

export default App
