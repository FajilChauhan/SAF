import React, { useState } from 'react'
import cardBreakfast from "../data/card_breakfast";
import cardLunch from "../data/card_lunch";
import cardDinner from "../data/card_dinner";

const Menu = () => {
  const [form, setForm] = useState({ "breakfast": true, "Lunch": false, "Dinner": false });

  const handleChange = (prop) => {
    const temp = {
      breakfast: false,
      Lunch: false,
      Dinner: false,
    };
    temp[prop] = true;
    setForm(temp);
  }

  return (
    <>
      <div className="Menu mt-[40px] flex flex-col">
        <h1 className='text-orange-500 font-bold text-center text-[34px] underline'>Our Menu</h1>
        <div className='mt-[40px] flex gap-[60px] justify-center w-full'>
          <span onClick={() => handleChange("breakfast")} className={`${form.breakfast ? "text-orange-400 underline" : "text-black"} cursor-pointer text-[22px] text-left block`}>
            Popular<span className="block text-[28px] font-bold">Breakfast</span></span>
          <span onClick={() => handleChange("Lunch")} className={`${form.Lunch ? "text-orange-400 underline" : "text-black"} cursor-pointer text-[22px] text-left block`}>
            Special<span className="block text-[28px] font-bold">Lunch</span></span>
          <span onClick={() => handleChange("Dinner")} className={`${form.Dinner ? "text-orange-400 underline" : "text-black"} cursor-pointer text-[22px] text-left block`}>
            Lovely<span className="block text-[28px] font-bold">Dinner</span></span>
        </div>
        <div className='mt-[40px]'>
          {form.breakfast && (
            <div className="px-[40px] w-full grid grid-cols-1 sm:grid-cols-2 gap-[35px]">
              {cardBreakfast.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[8px] border-2 border-black object-cover mr-[20px]"
                      src={item.img}
                      alt={item.name}
                    />
                    <div>
                      <span className="text-black font-bold text-[22px] block">
                        {item.name}
                      </span>
                      <p className="text-gray-500 text-[16px]">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-orange-400 text-[22px] font-bold">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          {form.Lunch && (
            <div className="px-[40px] w-full grid grid-cols-1 sm:grid-cols-2 gap-[35px]">
              {cardLunch.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[8px] border-2 border-black object-cover mr-[20px]"
                      src={item.img}
                      alt={item.name}
                    />
                    <div>
                      <span className="text-black font-bold text-[22px] block">
                        {item.name}
                      </span>
                      <p className="text-gray-500 text-[16px]">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-orange-400 text-[22px] font-bold">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          {form.Dinner && (
            <div className="px-[40px] w-full grid grid-cols-1 sm:grid-cols-2 gap-[35px]">
              {cardDinner.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center">
                    <img
                      className="w-[100px] h-[100px] rounded-[8px] border-2 border-black object-cover mr-[20px]"
                      src={item.img}
                      alt={item.name}
                    />
                    <div>
                      <span className="text-black font-bold text-[22px] block">
                        {item.name}
                      </span>
                      <p className="text-gray-500 text-[16px]">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-orange-400 text-[22px] font-bold">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Menu
