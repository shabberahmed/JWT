import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[data,setData]=useState({email:"",password:""})
    const handelChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const navigate=useNavigate()
    const Api=async()=>{
        const response=await axios.post("http://localhost:1010/login",data)
        try{
            console.log(response.data.token)
            const token=response.data.token
        localStorage.setItem('token',token)
        navigate('/data')
        }
        catch(err){
            console.log(err)
            
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        Api()
    }
  return (
    <div>
        LOGIN PAGE
         <form onSubmit={handleSubmit}>
            <input onChange={handelChange} type="text" name="email"/>
            <input onChange={handelChange} type="text" name="password"/>
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Login