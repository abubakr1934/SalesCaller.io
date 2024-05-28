import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import templateCheck from './components/templateCheck'
import HomePage1 from './components/HomePage1'

function App() {

  return (
    <>
      <Header></Header>
      <HomePage1></HomePage1>
      <Footer></Footer>
    </>
  )
}

export default App
