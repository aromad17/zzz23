import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Navigation from './components/Navigatgition'
import Home from './routes/Home'
import About from './routes/About'
import Detail from './routes/Detail'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
    // BrowserRouter > Routes > Route
    // path는 버튼 누를때 주소창에 나타는 경로, 경로로 구분
  )
}

export default App