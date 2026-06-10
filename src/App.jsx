import React from 'react'
import './App.css'
import './assets/Style/Design.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import QuestionAnswer from './Components/QuestionAnswer'
import NavBar from './Components/NavBar'
import AddQa from './Components/AddQa'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element= {<QuestionAnswer />} path='/display' />
        <Route element={<AddQa />} path='/add'/>
      </Routes>
    </>
  )
}

export default App
