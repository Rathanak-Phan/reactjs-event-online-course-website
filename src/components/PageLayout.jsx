import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function PageLayout({ ToggleBtn, dark }) {
  return (
    <>
        {dark ? 
        <header className='w-full h-20 flex justify-center items-center bg-blue-900 text-gray-100'>
            <Navbar ToggleBtn={ToggleBtn} dark={dark}/>
        </header> : 
        <header className='w-full h-20 flex justify-center items-center bg-gray-100 text-blue-900'>
            <Navbar ToggleBtn={ToggleBtn} dark={dark}/>
        </header>
        }

        <main>
            <Outlet />
        </main>
    </>
  )
}

export default PageLayout