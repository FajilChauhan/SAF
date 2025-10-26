import React from 'react'
import Navbar from '../Components/Navbar'
import About from './About'
import Menu from './Menu'
import Connect_Us from './Connect_Us'
import customer from '../data/customer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home overflow-x-hidden bg-white">
        <Navbar />

        {/* ===== HERO SECTION ===== */}
        <div className="hero relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="./bg-hero.jpg"
            alt="hero"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000]/80 backdrop-blur-[2px]"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-[25px] sm:px-[50px] lg:px-[100px] mt-[80px] gap-10">
            
            {/* ===== Left Content ===== */}
            <div className="text-white max-w-[700px] flex flex-col items-start transition-all duration-700 ease-in-out">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-orange-400 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
                Enjoy Every Bite with SAFNAM 🍽️
              </h1>
              <p className="text-[16px] sm:text-[18px] mb-8 leading-relaxed text-gray-200">
                Welcome to <span className="text-orange-400 font-bold">SAFNAM</span> — your one-stop spot for dining, room booking, and delicious food delivery.
                We blend taste, comfort, and technology to bring you the perfect restaurant experience.
                Order online, reserve a table, or book a premium room — all in one place.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/booktable")}
                  className="hover:bg-orange-600 bg-orange-400 px-[25px] py-[14px] sm:px-[30px] sm:py-[18px] text-[18px] sm:text-[20px] font-semibold rounded-[8px] shadow-md hover:shadow-xl transition-all duration-500"
                >
                  Book Your Table
                </button>

                <button
                  onClick={() => navigate("/bookorder")}
                  className="hover:bg-orange-600 bg-orange-400 px-[25px] py-[14px] sm:px-[30px] sm:py-[18px] text-[18px] sm:text-[20px] font-semibold rounded-[8px] shadow-md hover:shadow-xl transition-all duration-500"
                >
                  Book Your Order
                </button>

                <button
                  onClick={() => navigate("/bookroom")}
                  className="hover:bg-orange-600 bg-orange-400 px-[25px] py-[14px] sm:px-[30px] sm:py-[18px] text-[18px] sm:text-[20px] font-semibold rounded-[8px] shadow-md hover:shadow-xl transition-all duration-500"
                >
                  Book Your Room
                </button>
              </div>
            </div>

            {/* ===== Right Hero Image ===== */}
            <div className="w-full lg:w-[50%] flex justify-center items-center transition-transform duration-700 ease-in-out">
              <img
                src="./hero.png"
                alt="hero"
                className="w-[85%] sm:w-[70%] lg:w-[90%] max-w-[550px] object-contain hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-[0_5px_15px_rgba(255,165,0,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* ===== FEATURES SECTION ===== */}
        <div className="my-[70px] w-full flex flex-wrap justify-center gap-[30px] px-[30px] sm:px-[50px] text-black">
          {[
            { title: "Master Chefs", desc: "Our expert chefs craft dishes that combine tradition and creativity." },
            { title: "Fresh Ingredients", desc: "We use only fresh, high-quality ingredients to ensure rich taste and health." },
            { title: "Fast Service", desc: "Quick delivery and table service — because your time matters." },
            { title: "Play & Earn", desc: "Play our mini-games and win real discounts on your favorite meals!" },
          ].map((feature, i) => (
            <div
              key={i}
              className="cursor-pointer px-[25px] py-[30px] w-[90%] sm:w-[45%] lg:w-[22%] border-2 border-orange-400 bg-amber-50 rounded-[12px] text-center shadow-md hover:bg-orange-500 hover:text-white hover:scale-[1.05] transition-all duration-500"
            >
              <h1 className="font-extrabold pb-[10px] text-[20px] sm:text-[22px]">
                {feature.title}
              </h1>
              <p className="text-[15px] sm:text-[16px]">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* ===== ABOUT SECTION ===== */}
        <About />

        {/* ===== MENU SECTION ===== */}
        <Menu />

        {/* ===== TESTIMONIALS SECTION ===== */}
        <div className="mt-[70px] flex flex-col px-[30px] sm:px-[50px] mb-[70px]">
          <h1 className="text-black text-[28px] sm:text-[34px] underline font-extrabold text-center mb-[30px]">
            What Our Customers Say 💬
          </h1>
          <div className="w-full flex gap-[30px] overflow-x-auto scrollbar-hide pb-[20px]">
            {customer.map((item) => (
              <div
                key={item.id}
                className="flex flex-col cursor-pointer px-[30px] py-[30px] text-black bg-white w-[300px] sm:w-[350px] md:w-[400px] border-2 border-orange-400 rounded-[10px] hover:bg-orange-400 hover:text-white shadow-md hover:shadow-lg transition-all duration-500 ease-in-out"
              >
                <p className="mb-[25px] italic">"{item.text}"</p>
                <div className="flex items-center gap-[15px]">
                  <img
                    className="w-[60px] h-[60px] rounded-full border-2 border-black object-cover"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="font-semibold">
                    <h1>{item.name}</h1>
                    <h2 className="text-[14px] text-gray-600 sm:text-gray-300">{item.profession}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CONNECT SECTION ===== */}
        <Connect_Us />
      </div>
    </>
  );
};

export default Home;
