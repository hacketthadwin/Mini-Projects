import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <>
      <div className='flex justify-between p-4'>
        <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
          <img src="/favicon.png" alt="hello" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" />
          <div className="hidden lg:block sm:text-lg md:text-2xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent mt-2 sm:mt-0">
            StudyNotion
          </div>
        </div>

        <ul className="flex gap-16 items-center p-4 sm:text-lg md:text-2xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent mt-2 sm:mt-0 ">
  <li><NavLink to="/" className="text-white">Home</NavLink></li>
  <li><NavLink to="/about" className="text-white">About</NavLink></li>
  <li><NavLink to="/contact" className="text-white">Contact</NavLink></li>
  <li><NavLink to="/courses" className="text-white">Courses</NavLink></li>
</ul>

{/* navlink will always be inside mainheader*/}

        <div className="hidden lg:flex flex-col sm:flex-row justify-end items-start sm:items-center sm:mt-0 md:mt-0 gap-4 sm:gap-6 md:gap-8 mr-5">
          <NavLink to="/login">
            <button className="text-base sm:text-md md:text-lg font-bold text-white bg-transparent py-1 sm:py-2 px-1 sm:px-2 border-2 border-white rounded-xl transition-all duration-400 hover:bg-gradient-to-b hover:from-white hover:to-gray-300 hover:text-black ml-3">
              Log-In
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="text-base md:text-md md:text-lg font-bold text-white bg-transparent py-1 sm:py-2 px-1 sm:px-2 border-2 border-white rounded-xl transition-all duration-400 hover:bg-gradient-to-b hover:from-white hover:to-gray-300 hover:text-black">
              Sign-Up
            </button>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default MainHeader
