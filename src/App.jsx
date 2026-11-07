import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import Home from './page/Home'
import { useState } from 'react'
import Courses from './page/Courses'
import Register from './page/Register'

function App() {
  const[dark, SetDark] = useState(false);

  const ToggleBtn = () => {
    SetDark(!dark);
    console.log(dark);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />

          <Route path='/' element={<PageLayout ToggleBtn={ToggleBtn} dark={dark} />}>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
