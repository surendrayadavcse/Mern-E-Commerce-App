import React, { useEffect } from 'react'
import{useDispatch,useSelector} from "react-redux" 
import {getProducts} from '../components/reduxtoolkit/productsSlice'
import { useNavigate } from 'react-router-dom'
const ProductList = () => { 
  const navigate=useNavigate()
  const dispatch=useDispatch() 
  const products=useSelector((state)=>state.products.items) 
   console.log("productsssssss",products)
   

   useEffect(()=>{
   const token= localStorage.getItem("token")
   
   console.log(token)
   if(token!==null)
    dispatch(getProducts())
  else{
    navigate('/login')
  }
   },[dispatch])
  
  return (
    <div>
      {products[0].title}
    </div>
  )
}

export default ProductList
