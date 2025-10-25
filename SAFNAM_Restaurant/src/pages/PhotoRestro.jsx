import React from 'react';
import Navbar from '../Components/Navbar';
import Connect_Us from './Connect_Us';

const PhotoRestro = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative h-[500px] bg-gradient-to-r from-purple-900 to-indigo-700 flex flex-col justify-center items-center text-white px-6 text-center">
        <h1 className="text-[55px] md:text-[70px] font-bold mb-3 animate-fadeIn">
          Welcome to <span className="text-orange-400 underline">PhotoRestro</span>
        </h1>
        <p className="text-[22px] md:text-[28px] text-gray-200 max-w-[700px] leading-relaxed">
          Discover the beauty of our restaurant through a stunning gallery of
          spaces, moods, and experiences.
        </p>
      </div>

      {/* IMAGE GALLERY SECTION */}
      <div className="bg-gray-50 py-[80px] px-[30px] md:px-[60px]">
        <h2 className="text-center text-[40px] font-bold mb-[50px] text-orange-500">
          📸 Our Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            './about-1.jpg',
            './about-2.jpg',
            './about-3.jpg',
            './about-4.jpg',
            './room-1.png',
            './room-2.png',
            './room-3.png',
            './room-4.png',
            './RoofTop.png',
            './FirstFloor.png',
            './GroundFloor.png',
            './SecondFloor.png'
          ].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt="Restaurant view"
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all duration-500">
                <p className="text-white text-[18px] font-semibold tracking-wide">
                  Beautiful Moment
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Connect_Us/>
    </>
  );
};

export default PhotoRestro;
