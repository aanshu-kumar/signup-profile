import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const data = useRef(JSON.parse(localStorage.getItem('data')));
  function logoutHandler() {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    navigate('/');
  }
  if(localStorage.getItem('token') )
  {
    return (
    <div>
      <div className="flex flex-col h-screen w-1/2 mx-20 ">
      <h1 className="text-left text-5xl w-full mt-10">Profile</h1>
          <p className='text-4xl mt-8'>Full Name: {data.current.name}</p>
          <p className='text-4xl mt-8'>Email: {data.current.email}</p>
          <p className='text-4xl mt-8'>Password: {data.current.password}</p>
      <button onClick={logoutHandler} className="bg-white text-black px-7 py-2 w-1/4 mt-6">Logout</button>
    </div>
    </div>
    )
  }
  else{
    return <div>
            <h1 className="text-left text-5xl w-full mt-10">No record found, Please Sign up</h1>
            <button onClick={logoutHandler} className="bg-white text-black px-7 py-2 w-1/4 mt-6">Signup</button>
      </div>
  }
}

export default Profile
