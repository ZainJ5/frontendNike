import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/Admin')
            }
    },[])
    const { Component } = props
  return (
    <div>
         <Component/>
    </div>
  )
}
