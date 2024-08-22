import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Background from '../components/Background'

export default function Mainpage() {
  return (
    <div className='MainPage'>
      <Sidebar />
      <NavBar />
      <Background />
    </div>
  )
}