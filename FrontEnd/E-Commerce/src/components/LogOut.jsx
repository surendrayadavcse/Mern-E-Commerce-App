import React, { useEffect } from 'react'

function LogOut() {

    useEffect(()=>{
        localStorage.removeItem("token")
    })
  return (
   <></>
  )
}

export default LogOut