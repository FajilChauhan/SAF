import { useState } from "react";
import Navbar from '../Components/Navbar';
import PlayGameButton from "../Components/PlayGameButton";
import UseDiscountCheckbox from "../Components/UseDiscountCheckbox";
import Connect_Us from './Connect_Us';
import tables from "../data/table";

const BookTable = () => {
  const [selectedFloor, setSelectedFloor] = useState("Ground Floor");
  const [selectedTable, setSelectedTable] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const floors = ["Ground Floor", "1st Floor", "2nd Floor", "Rooftop"];

  const handleTableClick = (id) => setSelectedTable(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Booking Confirmed! ${discount ? `(${discount}% OFF Applied)` : ""}`);
    setShowForm(false);
    setSelectedTable(null);
    setDiscount(0);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="hero relative h-[500px] bg-gradient-to-r from-purple-900 to-indigo-700 items-center">
        <h1 className="underline text-orange-500 text-center text-[60px] font-bold pt-[130px]">
          Book Your Table
        </h1>
        <div className="mt-6 text-center">
          <p className="text-white text-[30px] mb-3">
            Want to grab a special deal? 🎯 Play our mini-game and unlock discounts up to{" "}
            <span className="font-semibold text-orange-500">15%</span> on your booking!
          </p>
          <PlayGameButton onDiscountEarned={(value) => setDiscount(value)} />
        </div>
      </div>

      {/* --- MAIN SECTION --- */}
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="px-[40px] about flex w-full mb-[40px] gap-[50px]">
          {/* --- LEFT IMAGES --- */}
          <div className="left w-1/2 mt-[100px]">
            <div className="flex mb-[20px]">
              <img
                className="w-[300px] rounded-[10px] border-2 overflow-hidden mr-[30px]"
                src="./GroundFloor.png"
                alt=""
              />
              <img
                className="w-[250px] rounded-[10px] border-2 overflow-hidden mt-[70px] mr-[50px]"
                src="./FirstFloor.png"
                alt=""
              />
            </div>
            <div className="flex">
              <img
                className="w-[250px] mb-[70px] rounded-[10px] border-2 overflow-hidden ml-[45px] mr-[30px]"
                src="./SecondFloor.png"
                alt=""
              />
              <img
                className="w-[300px] rounded-[10px] border-2 overflow-hidden"
                src="./RoofTop.png"
                alt=""
              />
            </div>
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="w-1/2 mt-[30px] p-10 bg-white rounded-3xl shadow-md border-2 border-orange-500">
            <h2 className="text-[34px] font-bold mb-8 text-orange-400">Select Table</h2>

            {/* Floor Tabs */}
            <div className="flex gap-2 mb-7">
              {floors.map((floor) => (
                <button
                  key={floor}
                  onClick={() => setSelectedFloor(floor)}
                  className={`px-4 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${
                    selectedFloor === floor
                      ? "bg-orange-400 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {floor}
                </button>
              ))}
            </div>

            {/* Table Grid */}
            <div className="grid grid-cols-3 gap-3 justify-items-center">
              {tables
                .filter((t) => t.floor === selectedFloor)
                .map((table) => (
                  <div
                    key={table.id}
                    onClick={() => handleTableClick(table.id)}
                    className={`relative w-24 h-24 flex items-center justify-center rounded-xl text-lg font-semibold cursor-pointer border transition-all duration-300 ${
                      selectedTable === table.id
                        ? "bg-orange-400 border-orange-500 scale-105 text-white font-bold"
                        : "bg-gray-100 text-gray-500 border-gray-200"
                    }`}
                  >
                    {table.id}
                    {selectedTable === table.id && (
                      <span className="absolute top-2 right-2 w-3 h-3 rounded-full border border-black bg-white"></span>
                    )}
                  </div>
                ))}
            </div>

            {/* Reserve Button */}
            <button
              onClick={() => setShowForm(true)}
              disabled={!selectedTable}
              className={`mt-12 w-full py-5 rounded-full text-white font-bold transition-all ${
                selectedTable
                  ? "bg-orange-400 hover:bg-orange-600 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {selectedTable
                ? `Reserve Table ${selectedTable}`
                : "Reserve a Table"}
            </button>
          </div>
        </div>

        {/* --- BOOKING FORM POPUP --- */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 text-black">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
                Confirm Your Table
              </h2>

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
              <input
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Email"
                required
                className="w-full border rounded px-3 py-2 mb-3"
              />

              {/* Discount Checkbox */}
              <UseDiscountCheckbox onDiscountApply={(val) => setDiscount(val)} />

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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
        )}
      </div>

      <Connect_Us />
    </>
  );
};

export default BookTable;
