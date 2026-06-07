import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProductsPage from './components/ProductsPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import BlogComingSoon from './components/BlogComingSoon'
import RecipesPage from './components/RecipesPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<BlogComingSoon />} />
          <Route path="/recipes" element={<RecipesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

