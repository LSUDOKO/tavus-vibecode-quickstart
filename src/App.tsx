import { Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Startups from './pages/Startups'
import Pricing from './pages/Pricing'
import Demo from './pages/Demo'
import Tavus from './pages/Tavus'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/tavus" element={<Tavus />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App