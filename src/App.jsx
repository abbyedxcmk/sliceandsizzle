import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
    </>
  )
}

export default App
