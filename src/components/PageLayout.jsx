import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function PageLayout() {
  return (
    <>
        <header className='w-full h-20 flex justify-center items-center bg-blue-900 text-gray-100'>
            <Navbar />
        </header>

        <main>
            <Outlet />
        </main>
    </>
  )
}

export default PageLayout