import React, { useState, useEffect} from "react";
import orderData from "../data/orderData";
import Navbar from "../Components/Navbar";
import Connect_Us from "./Connect_Us";
import PlayGameButton from "../Components/PlayGamebutton";
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

  // --- ORDER FUNCTIONS ---
  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQtyChange = (id, value) => {
    setFormData({
      ...formData,
      quantities: { ...formData.quantities, [id]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Details:", formData);
    alert(`✅ Order Placed Successfully! ${discount ? `(${discount}% OFF Applied)` : ""}`);
    setShowForm(false);
    setSelectedItems([]);
  };

  return (
    <>
      <Navbar />
      <div className="hero relative h-[500px] bg-gradient-to-r from-purple-900 to-indigo-700 items-center">
        <h1 className="underline text-center text-[60px] font-bold pt-[130px] text-orange-500 ">
          Book Your Order
        </h1>
        <div className="mt-6 text-center">
          <p className="text-white text-[30px] mb-3">
            Want to grab a special deal? 🎯 Play our mini-game and unlock discounts up to{" "}
            <span className="font-semibold text-orange-500">15%</span> on your booking!
          </p>
          <PlayGameButton onDiscountEarned={(value) => setDiscount(value)} />
          {discount > 0 && (
            <p className="text-green-400 text-xl mt-3 font-semibold">
              💸 You’ve unlocked {discount}% OFF on your order!
            </p>
          )}
        </div>
      </div>

      {/* --- MAIN MENU --- */}
      <div className="min-h-screen bg-gray-50 p-6 pb-[50px]">
        <h1 className="mt-[35px] text-center text-[36px] font-bold underline text-orange-500 mb-[40px]">
          Select Your Items 🍔
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {orderData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectItem(item.id)}
              className={`border rounded-xl p-4 cursor-pointer transition-all ${
                selectedItems.includes(item.id)
                  ? "border-orange-600 bg-purple-300"
                  : "border-orange-400"
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-orange-500 font-semibold">₹{item.price}</span>
                <span
                  className={`font-bold text-sm ${
                    item.available ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {item.available ? "Available" : "Out of Stock"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Place Order Button --- */}
        {selectedItems.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="bg-orange-400 text-white px-20 py-4 font-bold rounded-full hover:bg-orange-600 transition"
            >
              🛒 Place Order ({selectedItems.length})
            </button>
          </div>
        )}

        {/* --- Popup Form --- */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 text-black">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
                Confirm Your Order
              </h2>

              {selectedItems.map((id) => {
                const item = orderData.find((i) => i.id === id);
                return (
                  <div key={id} className="mb-3 flex justify-between items-center text-black">
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
                placeholder="Delivery Address"
                required
                className="w-full border rounded px-3 py-2 mb-4"
              />

              <UseDiscountCheckbox onDiscountApply={(val) => setDiscount(val)} />

    <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded">
      Confirm Booking {discount > 0 && `(−${discount}% applied)`}
    </button>
            </form>
          </div>
        )}
      </div>

      <Connect_Us />
    </>
  );
};

export default BookOrder;
