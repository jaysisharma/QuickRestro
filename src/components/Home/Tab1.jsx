import React from 'react'
import Cardx from './card'


const Tab1 = () => {

    const cardItems = [
        {
          id: 1,
          img: "",
          title: "Salted Pasta with Mushroom Sauce",
          price: " $ 2.69",
          left: "11 Bowls available",
        },
        {
          id: 2,
          img: "",
          title: "Spaghetti Carbonara",
          price: " $ 3.99",
          left: "8 Bowls available",
        },
        {
          id: 3,
          img: "",
          title: "Chicken Alfredo Pasta",
          price: " $ 4.99",
          left: "6 Bowls available",
        },
        {
          id: 4,
          img: "",
          title: "Vegetable Lasagna",
          price: " $ 4.49",
          left: "9 Bowls available",
        },
        {
          id: 5,
          img: "",
          title: "Margherita Pizza",
          price: " $ 5.99",
          left: "10 Slices available",
        },
        {
          id: 6,
          img: "",
          title: "Classic Cheeseburger",
          price: " $ 6.49",
          left: "5 Burgers available",
        },
        {
          id: 7,
          img: "",
          title: "Grilled Chicken Sandwich",
          price: " $ 5.29",
          left: "7 Sandwiches available",
        },
        {
          id: 8,
          img: "",
          title: "Caesar Salad",
          price: " $ 4.99",
          left: "12 Servings available",
        },
        {
          id: 9,
          img: "",
          title: "Vegetable Stir-Fry",
          price: " $ 5.49",
          left: "8 Plates available",
        },
        {
          id: 10,
          img: "",
          title: "Fish Tacos",
          price: " $ 6.99",
          left: "10 Tacos available",
        },
      ];
      

    return (
        <div className="tab1 h-full mt-6">
            <div className="dp flex items-center gap-4">
                <h2>Choose Dishes</h2>
                <div class="relative">
                    <select class="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-900">
                        <option>Dine in</option>
                        <option>Dine Out</option>
                        <option>Date</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5 1.5-1.5L10 9l7.5-7.5L19 6z" /></svg>
                    </div>
                </div>

            </div>

            <div className="cards mt-14 grid grid-cols-5 gap-16">
                {cardItems.map((item)=>(
                    
                <Cardx key={item.id} title={item.title} price={item.price} left={item.left}/>
                ))}
                
            </div>
        </div>
    )
}

export default Tab1