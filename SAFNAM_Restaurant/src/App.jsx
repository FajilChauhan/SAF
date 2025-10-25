import React from 'react'
import Home from './pages/Home'
import BookTable from './pages/BookTable'
import BookOrder from './pages/BookOrder'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import BookRoom from './pages/BookRoom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/booktable' element={<BookTable/>}/>
        <Route path='/bookorder' element={<BookOrder/>}/>
        <Route path='/bookroom' element={<BookRoom/>}/>
      </Routes>
    </div>
  )
}

export default App
