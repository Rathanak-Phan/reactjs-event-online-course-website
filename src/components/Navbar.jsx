import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar({ ToggleBtn, dark }) {
  return (
    <div className='w-7xl flex items-center justify-between'>
        <div>Logo</div>

        <nav>
            <ul className='flex gap-5'>
                <Link>Home</Link>
                <Link to="/courses">Courses</Link>
            </ul>
        </nav>


        <div className='flex gap-5 items-center'>
            {/* Theme mode toggle */}
            <div>
                {dark ? <MdOutlineDarkMode 
                    onClick={ToggleBtn}
                    className='text-2xl'/> : <MdOutlineLightMode 
                    onClick={ToggleBtn}
                    className='text-2xl'/>}

            </div>
        
            {/* Account */}
            <Link to="/register" className='w-12 h-12 rounded-full overflow-hidden'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTR1C1DlSW0upx21PhjY_yAnGRJvQQ13utiblL2qb6W_hlGzEERxfjsI&s=10" alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar