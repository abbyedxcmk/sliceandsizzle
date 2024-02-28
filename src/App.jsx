import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Supersellers from './components/Supersellers';
import Menu from './components/Menu';
import Feedbacks from './components/Feedbacks';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Supersellers />
      <Feedbacks />
    </>
  )
}

export default App
