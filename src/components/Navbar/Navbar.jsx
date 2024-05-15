import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import BG from '../../assets/bg.jpg'

const Navbar = () => {
  return (
    <div className="header">
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <img className="absolute inset-0 w-full h-[100vh] object-cover bg-center opacity-20" src={BG} alt="Background" />

      <div className="navbar text-3xl max-w-[1500px] z-10 m-auto flex justify-between h-16 items-center text-white ">

        <div className="logo relative cursor-pointer font-bold">Best of Test</div>
        <div className="right relative flex gap-4 items-center">
          <ul className='flex text-lg gap-8'>
            <li className='cursor-pointer relative group'>  <span>Rolls</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 rounded-lg transition-all group-hover:w-full"></span>
            </li>

            <li className='cursor-pointer relative group'>  <span>Pizza</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 rounded-lg transition-all group-hover:w-full"></span>
            </li>
            <li className='cursor-pointer relative group'>  <span>Business Lunches</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 rounded-lg transition-all group-hover:w-full"></span>
            </li>

            <li className='cursor-pointer relative group'>  <span>Snacks</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 rounded-lg transition-all group-hover:w-full"></span>
            </li>                     
            <li className='cursor-pointer relative group'>  <span>Desserts</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 rounded-lg transition-all group-hover:w-full"></span>
            </li>
            <li className='cursor-pointer relative group'>  <span>Drinks</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 rounded-lg transition-all group-hover:w-full"></span>
            </li>
          </ul>
          <div className="icons relative flex ml-6 gap-6 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 cursor-pointer' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <FontAwesomeIcon icon={faBell} className='w-4 cursor-pointer' />
          </div>
          <button className="btn text-lg ml-6 bg-gray-800  border px-3 py-1 rounded-3xl "><FontAwesomeIcon icon={faSignInAlt} className='w-4' /> Login</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar