import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import Home from './page/Home'
import { useState } from 'react'

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
          <Route path='/' element={<PageLayout ToggleBtn={ToggleBtn} dark={dark} />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
