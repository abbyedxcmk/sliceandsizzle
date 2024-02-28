import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Supersellers from './components/Supersellers';
import Menu from './components/Menu';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Supersellers />
    </>
  )
}

export default App
