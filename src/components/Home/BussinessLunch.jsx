import React from 'react'
import Pizza from '../../assets/pizza.jpg'
import Chef from '../../assets/chef.png'

const BussinessLunch = () => {

  const lunch = [
{
  id:1,
  day:"ON THE FIRST:",
  menu:"Soup,noodles,boscht,hodgepodge, cream cheese soup with mushroom",
},
{
  id:2,
  day:"ON THE SECOND",
  menu: "Pork chop, eggplant pasta, salmon steak, Thai chicken, baked potatoes, rissoto"
},
{
  id:3,
  day:"Salad",
  menu:"DUnzoza, caesar, spring, pineapple"
},
{
  id:4,
  day:"BEVERAGES",
  menu:"Coffee, fruit tea, cranberry juice, apple-cherry compote"
}

  ]

  return (
    <div className='text-white relative p-12  m-auto flex justify-center h-[100vh]'>
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <img className="absolute inset-0 w-full h-[100vh] object-cover bg-center opacity-15 transform rotate-180" src={Pizza} alt="Background" />

      <div className="lunch max-w-[1500px]  ">
        <div className="top relative mb-4 flex justify-center flex-col items-center gap-1">

          <h2 className='text-3xl font-bold'>Business Lunch</h2>
          <p>Order before 15:00 </p>
          <hr className="border-red-500 w-8 h-4 " />
        </div>
        <div className="m_content w-[1500px] h-[60vh] relative flex items-center">
          <div className="left w-1/2  max-w-[600px] flex gap-3 flex-col">
           {lunch.map((items)=>(
            <div className="items_list flex flex-col gap-3 mb-4" key={items.id}>
               <h2 className='text-gray-200 text-2  xl'>{items.day}</h2>
             <p className='text-gray-400 text-xl'>{items.menu}</p>
             <hr  className='border-red-500 '/>
            </div>
           ))}
          </div>
          <div className="right w-1/2 flex justify-center pl-8 items-center">
            <div className="ml-20 border-red-600 border-8 overflow-y-hidden rounded-full p-4">
            <img className="relative  top-16 object-cover transform scaleX(-1) " src={Chef} alt="Background" />
            </div>
          </div>
        </div>
        <div className="btn flex justify-center">
        <button className="btn relative mt-20 text-center border border-gray-400 p-2 px-4 rounded-xl hover:bg-red-600 hover:border-red-600">Order Now</button>

        </div>
      </div>
    </div>
  )
}

export default BussinessLunch