import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { userService } from '../service/userservice/userservice'
import { useNavigate } from 'react-router-dom'
// import { Login as loginservice } from '../service/userservice/userservice'
// import Register from './Register'
const service=new userService()
function Login() {

    const navigate=useNavigate()

    const [userCreds,setuserCreds]=useState({
        email:"",
        password:""
    }) 
 


  function handleInput(e){
    setuserCreds((prevcreds)=>{
        return {...prevcreds,[e.target.name]:e.target.value}
    })
  }
    
// async  function handleSubmit(e){
//     e.preventDefault()
//     // try{
//     //    const response=await fetch("http://localhost:3000/login",{
//     //         method:"POST",
//     //         body:JSON.stringify(userCreds),
//     //         headers:{
//     //             "Content-Type":"application/json"
//     //         }
            
//     //     })
//     //     const data=await response.json()
//     //     if(data.token!==undefined){
//     //         localStorage.setItem("user",JSON.stringify(data))
//     //         navigate('/home')
//     //     }

//     // }
   
//     try{
//         const response=await Login(userCreds)
//         console.log(response)
        
//     }
//     catch(err){
//         console.log(err)
//     }

//  }

async function handleSubmit(e) {
    e.preventDefault()
    try{

        const response=await service.Login(userCreds)
        if(!response.token){
          console.log("no user")
        }
        localStorage.setItem("token",response.token)
        navigate('/products')
        
    }
    catch(err){
      console.log(err)

    }
    
}
  console.log(userCreds)
  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
    <input type='text' onChange={handleInput}  name='email' placeholder='enter email'></input>
    <input type='password' onChange={handleInput}  name='password' placeholder='enter password'></input>
    <button>Login</button>
    </form>
    
    </>
   
  )
}

export default Login