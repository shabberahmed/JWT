import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const[data,setData]=useState({email:"",password:""})
    const handelChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const PostApi=async()=>{
        const response=await axios.post("http://localhost:1010/signup",data)
        try{
            console.log(response.config.data,"hello")
        }
        catch(err){
            console.log(err)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        PostApi()
    }
  return (
    <div>
        SIGN UP PAGE
        <form onSubmit={handleSubmit}>
            <input onChange={handelChange} type="text" name="email"/>
            <input onChange={handelChange} type="text" name="password"/>
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Signup