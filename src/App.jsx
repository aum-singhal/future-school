import './App.css'
import { HomePage } from './pages/home'
import { Navbar } from './components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/about'
import { Footer } from './components/footer/footer'
import { ScrollToTop } from './scrollToTop'

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
      <div className="copyright font-14 text-center color-white">
        Copyright @2024 Future Schools. All rights reserved
      </div>
    </div>
  )
}

export default App
