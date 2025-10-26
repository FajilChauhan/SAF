import React from "react";

const About = () => {
  return (
    <section className="about bg-white px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* LEFT IMAGES */}
      <div className="left flex flex-wrap justify-center md:justify-start md:w-1/2 gap-4">
        <img
          className="w-40 sm:w-52 md:w-64 rounded-2xl border-2 border-gray-300 shadow-md hover:scale-105 transition-transform"
          src="./about-1.jpg"
          alt="Restaurant interior"
        />
        <img
          className="w-36 sm:w-48 md:w-60 mt-6 rounded-2xl border-2 border-gray-300 shadow-md hover:scale-105 transition-transform"
          src="./about-2.jpg"
          alt="Dining area"
        />
        <img
          className="w-36 sm:w-48 md:w-60 rounded-2xl border-2 border-gray-300 shadow-md hover:scale-105 transition-transform"
          src="./about-3.jpg"
          alt="Chef preparing food"
        />
        <img
          className="w-40 sm:w-52 md:w-64 rounded-2xl border-2 border-gray-300 shadow-md hover:scale-105 transition-transform"
          src="./about-4.jpg"
          alt="Restaurant dishes"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="right md:w-1/2 text-gray-800 flex flex-col">
        <h1 className="text-orange-500 font-extrabold text-2xl md:text-3xl underline mb-2">
          About Us
        </h1>

        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Welcome to <span className="text-orange-400">SAFNAM</span>
        </h2>

        <p className="text-base md:text-lg mb-4">
          At <span className="font-semibold text-orange-500">SAFNAM</span>, we believe food isn’t
          just about taste — it’s an experience. Whether you want to
          <span className="font-medium"> dine in, book a table</span>, or
          <span className="font-medium"> order from home</span>, our goal is to
          serve you freshness, comfort, and flavor — all with a smile.
        </p>

        <p className="text-base md:text-lg mb-4">
          You can even play our <span className="text-orange-500 font-semibold">“Tap & Win”</span> game
          to earn exclusive discounts on your next meal!  
          With our clean design and quick login system, you can manage your
          bookings and orders in seconds.
        </p>

        <div className="flex flex-wrap gap-6 mb-6">
          <div>
            <p className="text-3xl font-bold text-orange-400">15+</p>
            <p className="text-lg font-medium text-gray-600">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-400">50+</p>
            <p className="text-lg font-medium text-gray-600">Master Chefs</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-400">10K+</p>
            <p className="text-lg font-medium text-gray-600">Happy Customers</p>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="team pt-4">
          <h3 className="font-bold text-center text-2xl md:text-3xl text-orange-400 underline mb-5">
            Our Master Chefs
          </h3>
          <div className="flex justify-center flex-wrap gap-5">
            <img
              className="w-24 h-24 border-2 border-orange-400 rounded-full object-cover shadow-md hover:scale-110 transition-transform"
              src="./team-1.jpg"
              alt="Chef 1"
            />
            <img
              className="w-24 h-24 border-2 border-orange-400 rounded-full object-cover shadow-md hover:scale-110 transition-transform"
              src="./team-2.jpg"
              alt="Chef 2"
            />
            <img
              className="w-24 h-24 border-2 border-orange-400 rounded-full object-cover shadow-md hover:scale-110 transition-transform"
              src="./team-3.jpg"
              alt="Chef 3"
            />
            <img
              className="w-24 h-24 border-2 border-orange-400 rounded-full object-cover shadow-md hover:scale-110 transition-transform"
              src="./team-4.jpg"
              alt="Chef 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
