import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UseNavigate() {
   let navigate = useNavigate();
    useEffect(()=>{
       if(true){
        navigate("/")
       }
    })

  return (
    <div>
      <p>navigate function</p>
    </div>
  )
}

export default UseNavigate
