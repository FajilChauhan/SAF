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
      <div className="home overflow-x-hidden">
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
          <div className="absolute inset-0 bg-[#000033]/80"></div>

          {/* Hero Caption */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-[40px] mt-[100px] gap-8">
            
            {/* ===== Left Content ===== */}
            <div className="text-white max-w-[700px] flex flex-col items-start transition-all duration-700 ease-in-out">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-700 ease-in-out">
                Enjoy Our Delicious Meal
              </h1>
              <p className="text-[16px] sm:text-[18px] mb-8 leading-relaxed transition-all duration-700 ease-in-out">
                At SAFNAM, we believe food should make you happy. We serve
                fresh, tasty, and healthy dishes made with care. Every meal is
                cooked with love to give you the best flavor and comfort.
                Whether you dine in, order online, or play to win discounts.
                SAFNAM is always here to make your day delicious and fun.
              </p>

              <div className="flex flex-wrap gap-4 transition-all duration-700 ease-in-out">
                <button
                  onClick={() => navigate("/booktable")}
                  className="hover:bg-orange-600 bg-orange-400 px-[25px] py-[15px] sm:px-[30px] sm:py-[20px] text-[18px] sm:text-[20px] font-semibold rounded-[6px] cursor-pointer transition-all duration-500 ease-in-out"
                >
                  Book Your Table
                </button>

                <button
                  onClick={() => navigate("/bookorder")}
                  className="hover:bg-orange-600 bg-orange-400 px-[25px] py-[15px] sm:px-[30px] sm:py-[20px] text-[18px] sm:text-[20px] font-semibold rounded-[6px] cursor-pointer transition-all duration-500 ease-in-out"
                >
                  Book Your Order
                </button>

                <button
                  onClick={() => navigate("/bookroom")}
                  className="mb-4 hover:bg-orange-600 bg-orange-400 px-[25px] py-[15px] sm:px-[30px] sm:py-[20px] text-[18px] sm:text-[20px] font-semibold rounded-[6px] cursor-pointer transition-all duration-500 ease-in-out"
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
                className="w-[80%] sm:w-[70%] lg:w-[90%] max-w-[500px] object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* ===== FEATURES SECTION ===== */}
        <div className="my-[40px] w-full flex flex-wrap justify-center gap-[30px] px-[40px] text-black transition-all duration-700 ease-in-out">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="cursor-pointer px-[20px] py-[25px] w-[90%] sm:w-[45%] lg:w-[22%] border-2 rounded-[8px] border-black bg-amber-50 hover:bg-orange-400 hover:text-white text-center transition-all duration-500 ease-in-out"
              >
                <h1 className="font-extrabold pb-[15px] text-lg sm:text-xl">
                  Master Chef
                </h1>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            ))}
        </div>

        {/* ===== OTHER SECTIONS ===== */}
        <About />
        <Menu />

        {/* ===== CLIENT TESTIMONIALS ===== */}
        <div className="mt-[50px] flex flex-col px-[40px] mb-[50px] transition-all duration-700 ease-in-out">
          <h1 className="text-black text-[28px] sm:text-[32px] underline font-bold text-center mb-[30px]">
            Our Client Say
          </h1>
          <div className="w-full flex gap-[30px] overflow-x-scroll scrollbar-hide">
            {customer.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer px-[30px] py-[30px] text-black flex flex-col w-[300px] sm:w-[350px] md:w-[400px] border-2 border-black hover:bg-orange-400 hover:text-white transition-all duration-500 ease-in-out"
              >
                <p className="mb-[30px]">{item.text}</p>
                <div className="flex gap-[20px]">
                  <img
                    className="w-[60px] rounded-full border-2 border-black"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="mt-[10px] font-bold">
                    <h1>{item.name}</h1>
                    <h1>{item.profession}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Connect_Us />
      </div>
    </>
  )
}

export default Home
