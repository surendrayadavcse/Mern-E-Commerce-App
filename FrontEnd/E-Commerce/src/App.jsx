import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     
     </BrowserRouter>
      
  
  )
}

export default App