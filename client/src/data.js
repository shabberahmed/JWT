import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Data = () => {
    const navigate=useNavigate()
    const TokenApi=async()=>{
        const instance=await axios.create({
            baseURL:'http://localhost:1010',
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        try{
            const response=await instance.get('/data')
            console.log(response.data)
        }
        catch(err){
            console.log(err)
            navigate("/login")
            
        }
    }
    useEffect(()=>{
        TokenApi()
    },[])
  return (
    <div>

    </div>
  )
}

export default Data