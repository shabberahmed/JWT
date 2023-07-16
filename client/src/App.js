import React from 'react'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './signup'
import Login from './Login'
import Data from './data'
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path="/login" element={<Login />} />
    <Route path='/data' element={<Data/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App