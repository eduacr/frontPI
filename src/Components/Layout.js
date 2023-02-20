import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NewHeader from './NewHeader'

export default function Layout() {
  return (
    <div className='main-container'>
        <NewHeader />
        <Outlet />
        <Footer />
    </div>
  )
}
