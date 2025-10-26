import React, { useState } from "react";
import { BedDouble, CalendarDays, Phone, User, Clock4 } from "lucide-react";
import Navbar from "../Components/Navbar";
import PlayGameButton from "../Components/PlayGameButton";
import UseDiscountCheckbox from "../Components/UseDiscountCheckbox";
import RoomData from "../data/RoomData";
import Connect_Us from "./Connect_Us";

const BookRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    rooms: 1,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openBooking = (room) => {
    setSelectedRoom(room);
    setFormData({ ...formData, rooms: 1 });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (formData.checkout < formData.checkin) {
      alert("❌ Check-out date cannot be before check-in date!");
      return;
    }

    alert(`✅ Booking Confirmed! ${discount ? `(${discount}% OFF Applied)` : ""}`);
    setSelectedRoom(null);
    setFormData({
      name: "",
      phone: "",
      checkin: "",
      checkout: "",
      rooms: 1,
    });
    setDiscount(0);
  };

  return (
    <>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[520px] bg-gradient-to-r from-purple-900 via-indigo-800 to-indigo-600 flex flex-col items-center justify-center text-white text-center px-5">
        <div className="flex items-center justify-center gap-4 mb-4">
          <BedDouble className="w-12 h-12 text-orange-400" />
          <h1 className="text-[58px] font-extrabold underline text-orange-400 decoration-orange-400 underline-offset-8">
            Book Your Room
          </h1>
        </div>
        <p className="text-[22px] max-w-3xl leading-relaxed mb-6">
          Experience comfort, luxury, and great savings at{" "}
          <span className="text-orange-400 font-semibold">SAFNAM Hotel</span>.
          Play a quick mini-game and unlock exclusive discounts up to{" "}
          <span className="text-orange-400">15%</span> on your stay! 🎯
        </p>
        <PlayGameButton onDiscountEarned={(value) => setDiscount(value)} />
      </div>

      {/* --- ROOM SELECTION --- */}
      <div className="px-[40px] py-[60px] bg-gradient-to-b from-gray-50 to-white text-black">
        <h2 className="text-[34px] font-bold text-center underline mb-[40px] text-orange-500">
          Choose Your Room
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RoomData.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                <p className="text-gray-600 mt-2">{room.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-orange-500">
                    ₹{room.price} / night
                  </p>
                  <span
                    className={`font-semibold ${
                      room.availability === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {room.availability}
                  </span>
                </div>
                <button
                  className={`mt-5 w-full py-3 rounded-xl text-lg font-medium transition-all ${
                    room.availability === "Available"
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  onClick={() => openBooking(room)}
                  disabled={room.availability !== "Available"}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BOOKING FORM MODAL --- */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4 overflow-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-5 text-center text-orange-500">
              Booking: {selectedRoom.name}
            </h3>

            <form onSubmit={handleBooking} className="flex flex-col gap-4 text-black">
              <label className="font-medium flex items-center gap-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </label>

              <label className="font-medium flex items-center gap-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </label>

              <div className="flex gap-4">
                <label className="font-medium w-1/2 flex flex-col gap-2">
                  <p className="flex gap-2 items-center"><CalendarDays size={18} /> Check-in</p>
                  <input
                    type="date"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </label>

                <label className="font-medium w-1/2 flex flex-col gap-1">
                  <p className="flex gap-2 items-center"><CalendarDays size={18} /> Check-in</p>
                  <input
                    type="date"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </label>
              </div>

              <label className="font-medium">
                Number of Rooms:
                <input
                  type="number"
                  name="rooms"
                  min="1"
                  value={formData.rooms}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </label>

              <UseDiscountCheckbox onDiscountApply={(val) => setDiscount(val)} />

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-5 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium"
                >
                  Confirm Booking {discount > 0 && `(−${discount}% applied)`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Connect_Us />
    </>
  );
};

export default BookRoom;
