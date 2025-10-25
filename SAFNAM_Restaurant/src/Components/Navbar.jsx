import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  // Handle scroll to add dark navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("navdark");
      } else {
        navRef.current.classList.remove("navdark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show dropdown immediately on hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  // Hide dropdown after 300ms on leave
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  return (
    <nav
      ref={navRef}
      className="nav w-full px-6 md:px-10 py-4 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 bg-transparent"
    >
      {/* Logo */}
      <div
        className="text-3xl md:text-4xl font-bold text-orange-400 cursor-pointer"
        onClick={() => navigate("/")}
      >
        SAFNAM
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center text-white font-semibold text-lg">
        <li
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-orange-400 transition"
        >
          Home
        </li>

        <li
          onClick={() => navigate("/photos")}
          className="cursor-pointer hover:text-orange-400 transition"
        >
          Photos
        </li>

        {/* Booking Dropdown */}
        <li
          className="relative cursor-pointer hover:text-orange-400 transition"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Booking ▾
          {showDropdown && (
            <ul className="absolute top-8 left-0 bg-white text-black rounded shadow-lg py-2 w-44">
              <li
                onClick={() => navigate("/booktable")}
                className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
              >
                Book Table
              </li>
              <li
                onClick={() => navigate("/bookroom")}
                className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
              >
                Book Room
              </li>
              <li
                onClick={() => navigate("/bookorder")}
                className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
              >
                Book Order
              </li>
            </ul>
          )}
        </li>

        <button className="bg-orange-400 px-5 py-2 rounded font-bold hover:bg-orange-500 transition">
          Login
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-3xl text-white cursor-pointer">☰</div>
    </nav>
  );
};

export default Navbar;
