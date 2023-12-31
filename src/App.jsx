import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet, Link, redirect } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { LandingPage } from './Components/Pages/LandingPage'


function App() {

  const  [loggedIn, setLoggedIn]  = useState(true)

  function handleToggle() {
      setLoggedIn(!loggedIn)
      console.log(loggedIn)
  }


  const PrivateRoutes = () => {
    return (
      loggedIn ? <Outlet /> : <Navigate to='/' />
    )
  }


  useEffect(() => {
    loggedIn ? redirect("/home") : redirect("/")
  }, [loggedIn])

  return (
    <BrowserRouter>
      <Header handleToggle={handleToggle}/>
      <Routes>
        
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />}/>
        </Route>
        <Route path='/' element={<LandingPage />} />
        
      </Routes>
      <Footer pos="fixed" bottom="0" w="100%"/>
    </BrowserRouter>
  )
}

export default App
