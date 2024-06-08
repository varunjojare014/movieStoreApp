import React from "react"
import Home from "./home/Home"
import {Route, Routes} from "react-router-dom"
import Films from "./films/Films"
import Signup from "./components/Signup"

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Films />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App
