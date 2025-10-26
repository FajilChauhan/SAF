import React, { useState } from "react";
import cardBreakfast from "../data/card_breakfast";
import cardLunch from "../data/card_lunch";
import cardDinner from "../data/card_dinner";

const Menu = () => {
  const [form, setForm] = useState({ breakfast: true, Lunch: false, Dinner: false });

  const handleChange = (prop) => {
    const temp = { breakfast: false, Lunch: false, Dinner: false };
    temp[prop] = true;
    setForm(temp);
  };

  const renderMenu = (items) => (
    <div
      className="px-[20px] sm:px-[40px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-[30px] transition-all duration-500 ease-in-out"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white shadow-md hover:shadow-lg border border-gray-200 rounded-xl p-[15px] hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center">
            <img
              className="w-[90px] h-[90px] rounded-[10px] border-2 border-orange-400 object-cover mr-[15px]"
              src={item.img}
              alt={item.name}
            />
            <div>
              <span className="text-black font-semibold text-[18px] sm:text-[20px] block">
                {item.name}
              </span>
              <p className="text-gray-500 text-[14px] sm:text-[16px] mt-[4px]">
                {item.desc}
              </p>
            </div>
          </div>
          <span className="text-orange-500 text-[20px] sm:text-[22px] font-bold ml-[10px]">
            ${item.price}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="Menu flex flex-col items-center mt-[60px] w-full">
        <h1 className="text-orange-500 font-extrabold text-center text-[30px] sm:text-[36px] underline">
          Our Menu
        </h1>

        <div className="mt-[30px] flex flex-wrap justify-center gap-[40px] sm:gap-[60px] w-full transition-all duration-500">
          <span
            onClick={() => handleChange("breakfast")}
            className={`cursor-pointer text-[20px] sm:text-[22px] font-medium transition-all duration-300 ${
              form.breakfast
                ? "text-orange-500 underline scale-105"
                : "text-gray-800 hover:text-orange-400"
            }`}
          >
            Popular <span className="block text-[26px] font-bold">Breakfast</span>
          </span>

          <span
            onClick={() => handleChange("Lunch")}
            className={`cursor-pointer text-[20px] sm:text-[22px] font-medium transition-all duration-300 ${
              form.Lunch
                ? "text-orange-500 underline scale-105"
                : "text-gray-800 hover:text-orange-400"
            }`}
          >
            Special <span className="block text-[26px] font-bold">Lunch</span>
          </span>

          <span
            onClick={() => handleChange("Dinner")}
            className={`cursor-pointer text-[20px] sm:text-[22px] font-medium transition-all duration-300 ${
              form.Dinner
                ? "text-orange-500 underline scale-105"
                : "text-gray-800 hover:text-orange-400"
            }`}
          >
            Lovely <span className="block text-[26px] font-bold">Dinner</span>
          </span>
        </div>

        <div className="w-full max-w-screen-xl">
          {form.breakfast && renderMenu(cardBreakfast)}
          {form.Lunch && renderMenu(cardLunch)}
          {form.Dinner && renderMenu(cardDinner)}
        </div>
      </div>
    </>
  );
};

export default Menu;
