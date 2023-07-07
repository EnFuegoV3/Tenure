import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer pos="fixed" bottom="0" w="100%"/>
    </BrowserRouter>
  )
}

export default App
