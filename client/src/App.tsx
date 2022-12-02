import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  )
}
