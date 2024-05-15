import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import Bowl from '../../assets/bowl.png'
import Chilli from "../../assets/chilli.png"
import Tomato from "../../assets/tomato.png"
import Onion from "../../assets/onion.png"
import one from "../../assets/one.png"
const Hero = () => {
  return (
    <div className='h-[95vh] relative text-white max-w-[1550px] m-auto flex items-center' style={{ backgroundImage: "url('');" }}>


      <div className="left w-1/2 ">
        <h2 className='text-[90px] font-medium leading-[95px]'>
          Delivery of fresh <br />
          and <span className='text-red-500'>hot food</span> <br />
          with 40 minutes
        </h2>
        <div className="lists grid grid-cols-3 gap-4 mt-8">
          <div className="item1  text-center">
            <FontAwesomeIcon icon={faClock} className='text-red-500 text-center text-2xl mb-3' />
            <p>Delivery with 10:00 to 19:00</p>
            <p className="text-gray-500">OPENING HOURS</p>
          </div>
          <div className="item1  text-center">
            <FontAwesomeIcon icon={faLocationArrow} className='text-red-500 text-center text-2xl mb-3' />
            <p>Omuk St.,126</p>
            <p className="text-gray-500">NEAREST CAFE</p>
          </div>
          <div className="item1  text-center">
            <FontAwesomeIcon icon={faPhone} className='text-red-500 text-center text-2xl mb-3' />
            <p>8-800-100-20-20</p>
            <p className="text-gray-500">PHONE</p>
          </div>
        </div>
        <div className="btns py-8 px-4 flex gap-6">
          <button className="btn bg-red-600 text-white px-4 py-2 rounded-xl ">Order Now</button>
          <button className="btn bg-transparent border text-white px-4 py-2 rounded-xl hover:bg-red-600 hover:border-red-600">See Menu</button>
        </div>
        <div className="medal flex gap-4 text-red-600">
          <img src={one} alt="" className='w-12' />
          <div className="desc">
            <p>#1 National Food Service</p>
            <p className='text-gray-400'>1.5k Votes</p>
          </div>
        </div>
      </div>
      <div className="right w-1/2">
        <img src={Bowl} alt="Banner" className='w-[700px]' />
        <img src={Chilli} alt="" className='absolute top-8 right-0 w-40' />
        <img src={Tomato} alt="" className='absolute bottom-40 left-90 w-40' />
        <img src={Onion} alt="" className='absolute bottom-48 right-8 w-20' />
      </div>

    </div>
  )
}

export default Hero