import { useState } from "react";
import { Clock, CalendarDays, UtensilsCrossed, PartyPopper } from "lucide-react";
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
    time: "",
  });

  const floors = ["Ground Floor", "1st Floor", "2nd Floor", "Rooftop"];

  const handleTableClick = (table) => {
    if (!table.booked) setSelectedTable(table.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time) {
      alert("⏰ Please select a reservation time before confirming!");
      return;
    }

    alert(`✅ Booking Confirmed for ${formData.time}! ${discount ? `(${discount}% OFF Applied)` : ""}\n⚠️ Please arrive within 15 minutes of your selected time.`);
    setShowForm(false);
    setSelectedTable(null);
    setDiscount(0);
    setFormData({ name: "", phone: "", time: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="hero relative h-[500px] bg-gradient-to-r from-purple-900 to-indigo-700 flex flex-col justify-center items-center text-center text-white">
        <h1 className="underline text-orange-500 text-[60px] font-bold mb-4">
          Book Your Table
        </h1>
        <div className="flex justify-center items-center gap-6 text-orange-300 mb-4">
          <CalendarDays size={38} />
          <UtensilsCrossed size={38} />
          <PartyPopper size={38} />
          <Clock size={38} />
        </div>
        <p className="text-white text-[26px] mb-4 max-w-3xl">
          Make your dining special — reserve your favorite spot and enjoy a great meal with us 🍽️
        </p>
        <p className="text-white text-[22px] mb-4">
          🎯 Want to grab a special deal? Play our mini-game and unlock discounts up to{" "}
          <span className="font-semibold text-orange-400">15%</span> on your booking!
        </p>
        <PlayGameButton onDiscountEarned={(value) => setDiscount(value)} />
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
                    onClick={() => handleTableClick(table)}
                    className={`relative w-24 h-24 flex items-center justify-center rounded-xl text-lg font-semibold border transition-all duration-300 
                      ${
                        table.booked
                          ? "bg-gray-300 text-gray-400 border-gray-300 cursor-not-allowed opacity-60"
                          : selectedTable === table.id
                          ? "bg-orange-400 border-orange-500 scale-105 text-white font-bold"
                          : "bg-gray-100 text-gray-600 border-gray-200 hover:border-orange-400 hover:scale-105 cursor-pointer"
                      }`}
                  >
                    {table.id}
                    {table.booked && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                        Booked
                      </span>
                    )}
                    {selectedTable === table.id && !table.booked && (
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
                type="time"
                name="time"
                onChange={handleChange}
                value={formData.time}
                required
                className="w-full border rounded px-3 py-2 mb-3"
              />

              <div className="text-[14px] text-red-600 mb-4">
                ⚠️ Note: If you don’t arrive within{" "}
                <span className="font-semibold">15 minutes</span> of your selected
                time, your booking will be automatically cancelled.
              </div>

              <UseDiscountCheckbox onDiscountApply={(val) => setDiscount(val)} />

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
