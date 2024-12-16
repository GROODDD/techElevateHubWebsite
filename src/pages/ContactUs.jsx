import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-gray-800 text-white"
    >
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">Have any questions? We’re here to help!</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
