import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import PlayGameButton from "../Components/PlayGameButton";
import UseDiscountCheckbox from "../Components/UseDiscountCheckbox";
import RoomData from "../data/RoomData";
import Connect_Us from "./Connect_Us";

const BookRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
    setSuccessMessage("");
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (
      formData.checkin &&
      formData.checkout &&
      formData.checkout < formData.checkin
    ) {
      alert("❌ Check-out date cannot be before check-in date!");
      return;
    }

    setSuccessMessage(
      `✅ Your room "${selectedRoom.name}" has been successfully booked! ${
        discount ? `(${discount}% OFF applied)` : ""
      }`
    );

    // reset
    setSelectedRoom(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      checkin: "",
      checkout: "",
      rooms: 1,
    });
    setDiscount(0);
  };

  return (
    <>
      {successMessage && (
        <div className="mt-0 p-3 bg-green-100 text-green-800 rounded text-center">
          {successMessage}
        </div>
      )}

      <Navbar />

      {/* HERO SECTION */}
      <div className="hero relative h-[500px] bg-gradient-to-r from-purple-900 to-indigo-700 items-center">
        <h1 className="underline text-orange-500 text-center text-[60px] font-bold pt-[130px]">
          Book Your Room
        </h1>
        <div className="mt-6 text-center">
          <p className="text-white text-[30px] mb-3">
            Want to grab a special deal? 🎯 Play our mini-game and unlock discounts up to{" "}
            <span className="font-semibold text-orange-500">15%</span> on your booking!
          </p>
          <PlayGameButton onDiscountEarned={(value) => setDiscount(value)} />
        </div>
      </div>

      {/* ROOM LISTING */}
      <div className="px-[40px] py-[50px] bg-white text-black">
        <h2 className="text-[34px] font-bold text-center underline mb-[40px] text-orange-500">
          Choose Your Room
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {RoomData.map((room) => (
            <div
              key={room.id}
              className="border rounded-lg p-3 shadow hover:shadow-lg transition relative"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-44 object-cover rounded"
              />
              <h3 className="font-semibold mt-2">{room.name}</h3>
              <p className="text-sm">{room.description}</p>
              <p className="mt-1">💰 ₹{room.price}</p>
              <p
                className={`mt-1 font-medium ${
                  room.availability === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {room.availability}
              </p>
              <button
                className={`mt-3 px-5 py-2 rounded font-medium ${
                  room.availability === "Available"
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-gray-400 text-black cursor-not-allowed"
                }`}
                onClick={() => openBooking(room)}
                disabled={room.availability !== "Available"}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* BOOKING MODAL */}
        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 text-black">
              <h3 className="text-xl font-bold mb-4 text-center text-orange-500">
                Booking: {selectedRoom.name}
              </h3>

              <form onSubmit={handleBooking} className="flex flex-col gap-3">
                <label>
                  Number of Rooms:
                  <input
                    type="number"
                    name="rooms"
                    min="1"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                  />
                </label>

                <div className="flex gap-4">
                  <label className="w-1/2">
                    Check-in:
                    <input
                      type="date"
                      name="checkin"
                      value={formData.checkin}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                      required
                    />
                  </label>
                  <label className="w-1/2">
                    Check-out:
                    <input
                      type="date"
                      name="checkout"
                      value={formData.checkout}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                      required
                    />
                  </label>
                </div>

                <label>
                  Full Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                    required
                  />
                </label>

                <label>
                  Phone Number:
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                    required
                  />
                </label>

                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                    required
                  />
                </label>

                {/* Discount Checkbox */}
                <UseDiscountCheckbox onDiscountApply={(val) => setDiscount(val)} />

                {/* Buttons */}
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

        {/* SUCCESS MODAL */}
        {successMessage && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-green-100 text-green-800 rounded-2xl shadow-lg p-6 w-full max-w-sm text-center animate-fadeIn">
              {successMessage}
              <button
                className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => setSuccessMessage("")}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>

      <Connect_Us />
    </>
  );
};

export default BookRoom;
