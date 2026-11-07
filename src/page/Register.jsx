import React, { useState } from 'react'
import { FiUserCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Register() {
    const [firstName, setFirstName] = useState("");

    const [message, setMassage] = useState("");
    const [isRegister, setIsRegister] = useState(false);

    function handleRegister() {
        setIsRegister(true);
        setMassage("Register success");
        console.log(isRegister);
    }    

    if (isRegister) {
        return (
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-5'>
                        <FiUserCheck className='text-3xl text-green-600'/>
                        <h2>{message}</h2>
                    </div>
                    <Link to="/" className='px-5 py-2 bg-green-400'>Continues to home page</Link>
                </div>
            </div>
        )
    }

    if (!isRegister) {
        return (
            <div className='flex flex-col items-center'>
            <h2 className='text-center my-10 text-5xl font-bold'>Register account</h2>

            <form 
                action="" 
                onSubmit={handleRegister}
                className='bg-gray-100 w-xl rounded-lg p-5'>
                <div className='my-3 flex flex-col gap-3'>
                    <label htmlFor="">First name</label>
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={(event) => {setFirstName(event.target.value)}}
                        placeholder='e.g: Sokpeng' 
                        className='border-2 border-gray-400 outline-0 p-2 rounded-md'/>
                </div>

                <div className='my-3 flex flex-col gap-3'>
                    <label htmlFor="">Last name</label>
                    <input type="text" id='last_name' placeholder='e.g: Ly' className='border-2 border-gray-400 outline-0 p-2 rounded-md'/>
                </div>

                <div className='my-3 flex flex-col gap-3'>
                    <label htmlFor="">Email</label>
                    <input type="text" id='email' placeholder='e.g: ex@example.com' className='border-2 border-gray-400 outline-0 p-2 rounded-md'/>
                </div>

                <div className='my-3 flex flex-col gap-3'>
                    <label htmlFor="">Password</label>
                    <input type="password" id='password' placeholder='e.g: Sokpeng123@Aa' className='border-2 border-gray-400 outline-0 p-2 rounded-md'/>
                </div>

                <div className='flex justify-center'>
                    <button 
                        type='submit'
                        className='px-10 py-2 bg-green-700 mt-5 rounded-md text-gray-100'>Register</button>
                </div>
            </form>
        </div>
    )
    }
}

export default Register