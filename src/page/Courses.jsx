import React, { useState } from 'react'
import courses from '../data/course'

function Courses() {
    const [search, setSearch] = useState("");

    const searchFilter = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <div>
        <h2>Explore courses</h2>

        <div className='my-5'>
            <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type="text" 
                className='px-5 py-2 rounded-full'
                placeholder='Search course here'/>
        </div>

        <div className='grid grid-cols-4 gap-3'>
            {searchFilter.map((course) => (
                <div key={course.id} className=''>
                    {course.title}
                </div>
            ))}

            {searchFilter.length === 0 && 
                <h2>Course not found</h2>
            }
        </div>

    </div>
  )
}

export default Courses