import React, { useState } from "react";

const Connect_Us = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle actual backend submit here later
    alert("✅ Your message has been sent successfully!");

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-purple-950 flex flex-col lg:flex-row flex-wrap px-[20px] sm:px-[40px] py-[50px] gap-[30px] text-[20px] sm:text-[24px] text-white transition-all duration-700 ease-in-out">
      {/* CONTACT SECTION */}
      <div className="flex-1 min-w-[250px]">
        <h1 className="text-orange-500 font-bold text-[26px] sm:text-[30px] mb-[20px] underline">
          Contact
        </h1>
        <p className="mb-[5px]">123 Street, Gandhinagar, India</p>
        <p className="mb-[5px]">+91 8866430415</p>
        <p>safnam_info@gmail.com</p>
      </div>

      {/* OPENING SECTION */}
      <div className="flex-1 min-w-[250px]">
        <h1 className="text-orange-500 font-bold text-[26px] sm:text-[30px] mb-[20px] underline">
          Opening
        </h1>
        <p>Monday - Saturday</p>
        <p className="mb-[10px]">11:30 AM - 10 PM</p>
        <p>Sunday</p>
        <p>11 AM - 11 PM</p>
      </div>

      {/* COMPLAIN FORM */}
      <div className="flex-1 min-w-[400px] max-w-[500px] text-white">
        <h1 className="text-orange-500 font-bold text-[26px] sm:text-[30px] mb-[20px] underline">
          Complain
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-[8px] border-2 border-orange-400 mb-[15px] rounded-[5px] px-[10px] text-white outline-none"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-[8px] border-2 border-orange-400 mb-[15px] rounded-[5px] px-[10px] text-white outline-none"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full py-[8px] border-2 border-orange-400 mb-[15px] rounded-[5px] px-[10px] text-white outline-none"
            type="text"
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full py-[8px] border-2 border-orange-400 mb-[20px] rounded-[5px] px-[10px] text-white outline-none resize-none h-[100px]"
            placeholder="Message"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-400 font-bold text-[24px] sm:text-[30px] rounded-[6px] py-[10px] hover:bg-orange-500 transition-all duration-500 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect_Us;
