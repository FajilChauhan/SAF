import React, { useState } from "react";

const Connect_Us = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-900 text-white px-[20px] sm:px-[60px] py-[40px] flex flex-col lg:flex-row flex-wrap justify-center items-start gap-[50px] transition-all duration-700 ease-in-out">

        {/* CONTACT INFO */}
        <div className="flex-1 min-w-[260px]">
          <h1 className="text-orange-400 font-extrabold text-[30px] mb-[20px] underline decoration-4 decoration-orange-500 underline-offset-4">
            📞 Contact Us
          </h1>
          <p className="text-gray-200 mb-[10px]">123 Street, Gandhinagar, India</p>
          <p className="text-gray-200 mb-[10px]">+91 8866430415</p>
          <p className="text-gray-200">safnam_info@gmail.com</p>
        </div>

        {/* OPENING HOURS */}
        <div className="flex-1 min-w-[260px]">
          <h1 className="text-orange-400 font-extrabold text-[30px] mb-[20px] underline decoration-4 decoration-orange-500 underline-offset-4">
            ⏰ Opening Hours
          </h1>
          <div className="text-gray-200">
            <p>Monday - Saturday</p>
            <p className="mb-[15px]">11:30 AM - 10:00 PM</p>
            <p>Sunday</p>
            <p>11:00 AM - 11:00 PM</p>
          </div>
        </div>

        {/* COMPLAIN FORM */}
        <div className="flex-1 min-w-[300px] max-w-[480px]">
          <h1 className="text-orange-400 font-extrabold text-[30px] mb-[25px] underline decoration-4 decoration-orange-500 underline-offset-4">
            📝 Complain
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full py-[10px] border border-orange-400 bg-transparent rounded-[6px] px-[12px] text-white placeholder-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-300"
            />
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="w-full py-[10px] border border-orange-400 bg-transparent rounded-[6px] px-[12px] text-white placeholder-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (In This Write Fully With Description)"
              required
              className="w-full h-[100px] border border-orange-400 bg-transparent rounded-[6px] px-[12px] py-[10px] text-white placeholder-gray-300 resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-[20px] py-[12px] rounded-[8px] shadow-lg shadow-orange-400/40 transition-all duration-500 hover:scale-[1.03]"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-purple-950 text-white py-[40px] text-center border-t border-purple-800">
        <p className="text-[18px] mb-2 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-orange-400">SAFNAM</span>. All rights reserved.
        </p>
        <p className="text-[15px] text-gray-300">
          Designed with ❤️ by{" "}
          <span className="font-semibold text-orange-300">Fajil</span>
        </p>
      </footer>
    </>
  );
};

export default Connect_Us;
