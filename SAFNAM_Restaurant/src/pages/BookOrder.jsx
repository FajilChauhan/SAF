import React, { useState } from "react";
import orderData from "../data/orderData";
import Navbar from "../Components/Navbar";
import Connect_Us from "./Connect_Us";
import PlayGameButton from "../Components/PlayGameButton";
import UseDiscountCheckbox from "../Components/UseDiscountCheckbox";

const BookOrder = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantities: {},
  });

  // --- Select Item ---
  const handleSelectItem = (id, available) => {
    if (!available) return; // 🚫 Don’t allow click if unavailable
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // --- Form Handlers ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQtyChange = (id, value) => {
    setFormData({
      ...formData,
      quantities: { ...formData.quantities, [id]: value },
    });
  };

  // --- Validate Address ---
  const isAddressValid = () => {
    if (!formData.address.toLowerCase().includes("km")) {
      alert("⚠️ Address must be within 10 km!");
      return false;
    }
    return true;
  };

  // --- Submit Form ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAddressValid()) return;

    console.log("Order Details:", formData);
    alert(`✅ Order Placed Successfully! ${discount ? `(${discount}% OFF Applied)` : ""}`);
    setShowForm(false);
    setSelectedItems([]);
  };

  return (
    <>
      <Navbar />

      {/* 🌟 HERO SECTION */}
      <div className="relative bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-center py-20 px-6 flex flex-col items-center justify-center text-white">
        <h1 className="text-[45px] sm:text-[60px] font-extrabold text-orange-400 drop-shadow-lg mb-4">
          Book Your Favorite Meals 🍱
        </h1>
        <p className="max-w-3xl text-lg sm:text-2xl mb-4">
          Experience deliciousness at your doorstep! 🎉 Choose your favorite dishes, play our
          mini-game to earn discounts, and enjoy mouthwatering meals with just a few clicks.
        </p>
        <p className="text-lg sm:text-xl text-orange-300 font-semibold mb-6">
          Unlock up to <span className="text-orange-500">15% OFF</span> by playing our surprise mini-game 🎮
        </p>
        <PlayGameButton onDiscountEarned={(value) => setDiscount(value)} />
        {discount > 0 && (
          <p className="text-green-300 text-lg mt-3 font-semibold">
            💸 You’ve unlocked {discount}% OFF!
          </p>
        )}
      </div>

      {/* 🍔 MENU SECTION */}
      <div className="min-h-screen bg-gray-50 py-12 px-6 text-black">
        <h2 className="text-center text-[32px] sm:text-[38px] font-bold underline text-orange-500 mb-[40px]">
          Choose Your Dishes 🍽️
        </h2>

        {/* 🧩 GRID MENU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {orderData.map((item) => {
            const isSelected = selectedItems.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => handleSelectItem(item.id, item.available)}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all transform hover:scale-[1.03] ${
                  isSelected
                    ? "border-4 border-orange-500 bg-orange-100"
                    : "border-2 border-transparent bg-white"
                } ${!item.available ? "opacity-60 grayscale cursor-not-allowed" : "cursor-pointer"}`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-semibold text-lg">
                      ₹{item.price}
                    </span>
                    <span
                      className={`font-semibold text-sm ${
                        item.available ? "text-green-700" : "text-red-600"
                      }`}
                    >
                      {item.available ? "Available" : "Not Available"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🛒 PLACE ORDER BUTTON */}
        <div className="text-center mt-10">
          <button
            onClick={() => selectedItems.length > 0 && setShowForm(true)}
            disabled={selectedItems.length === 0}
            className={`px-10 py-4 font-bold rounded-full shadow-md transition-all ${
              selectedItems.length > 0
                ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            🛒 Place Order{" "}
            {selectedItems.length > 0 && `(${selectedItems.length} selected)`}
          </button>
        </div>

        {/* 📋 ORDER FORM POPUP */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-lg max-h-[85vh] overflow-y-auto text-black">
              <h2 className="text-2xl font-bold mb-5 text-center text-orange-500">
                Confirm Your Order
              </h2>
              <form onSubmit={handleSubmit}>
                {selectedItems.map((id) => {
                  const item = orderData.find((i) => i.id === id);
                  return (
                    <div key={id} className="mb-3 flex justify-between items-center">
                      <span className="font-semibold text-gray-700">{item.name}</span>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        onChange={(e) => handleQtyChange(id, e.target.value)}
                        className="w-20 border rounded px-2 py-1 text-center"
                      />
                    </div>
                  );
                })}

                <hr className="my-4" />

                <input
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Full Name"
                  required
                  className="w-full border rounded px-3 py-2 mb-3"
                />
                <input
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded px-3 py-2 mb-3"
                />
                <textarea
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  placeholder="Delivery Address (within 10 km)"
                  required
                  className="w-full border rounded px-3 py-2 mb-4"
                />

                <UseDiscountCheckbox onDiscountApply={(val) => setDiscount(val)} />

                <div className="flex gap-3 mt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Confirm Booking {discount > 0 && `(−${discount}% applied)`}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <Connect_Us />
    </>
  );
};

export default BookOrder;
