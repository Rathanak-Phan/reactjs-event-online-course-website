import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <div className='w-7xl flex items-center justify-between'>
        <div>Logo</div>

        <nav>
            <ul className='flex gap-5'>
                <Link>Home</Link>
                <Link>Home</Link>
            </ul>
        </nav>


        <div className='flex gap-5 items-center'>
            {/* Theme mode toggle */}
            <div>
                <MdOutlineDarkMode className='text-2xl'/>
            </div>
        
            {/* Account */}
            <div className='w-12 h-12 rounded-full overflow-hidden'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTR1C1DlSW0upx21PhjY_yAnGRJvQQ13utiblL2qb6W_hlGzEERxfjsI&s=10" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar