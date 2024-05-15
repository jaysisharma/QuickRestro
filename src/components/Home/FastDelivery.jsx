import React from 'react'
import Delivery from '../../assets/delivery.png'


const FastDelivery = () => {
  const lunch = [
    {
      id: 1,
      day: "ON THE FIRST:",
      menu: "Soup,noodles,boscht,hodgepodge, cream cheese soup with mushroom",
    },
    {
      id: 2,
      day: "ON THE SECOND",
      menu: "Pork chop, eggplant pasta, salmon steak, Thai chicken, baked potatoes, rissoto"
    },
    {
      id: 3,
      day: "Salad",
      menu: "DUnzoza, caesar, spring, pineapple"
    },
    {
      id: 4,
      day: "BEVERAGES",
      menu: "Coffee, fruit tea, cranberry juice, apple-cherry compote"
    }

  ]
  return (
    <div className=' relative text-white h-screen   pt-20'>
      <div className="top flex justify-center flex-col items-center py-8">
        <h2 className='text-2xl'>Fast Delivery within an hour</h2>
        <p className='text-gray-400'>Order before 22:00</p>
        <hr className="border-red-500 w-12 h-4 mt-2" />
      </div>
      <div className="m_conc flex py-10">
      <div className="left w-1/2 flex justify-center pl-8 items-center">
          <div className="ml-20 border-red-600 border-8 overflow-y-hidden rounded-full p-4">
            <img className="relative  top-16 object-cover  " src={Delivery} alt="Background" />
          </div>
        </div>
        <div className="right w-1/2  max-w-[600px] flex gap-3 flex-col">
          {lunch.map((items) => (
            <div className="items_list flex flex-col gap-3 mb-4" key={items.id}>
              <h2 className='text-gray-200 text-2  xl'>{items.day}</h2>
              <p className='text-gray-400 text-xl'>{items.menu}</p>
              <hr className='border-red-500 ' />
            </div>
          ))}
        </div>
       
      </div>
      <div className="btn flex justify-center">
        <button className="btn relative  text-center border border-gray-400 p-2 px-4 rounded-xl hover:bg-red-600 hover:border-red-600">Order Now</button>

        </div>
      
    </div>
  )
}

export default FastDelivery