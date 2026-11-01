import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import Home from './page/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
