import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import HomePage1 from './components/HomePage1'
import HomePage2 from './components/HomePage2'
import HomePage3 from './components/HomePage3'

function App() {

  return (
    <>
      <Header></Header>
      <HomePage1> </HomePage1>
      <HomePage2></HomePage2>
      <HomePage3></HomePage3>
      <Footer></Footer>
      
    </>
  )
}

export default App
