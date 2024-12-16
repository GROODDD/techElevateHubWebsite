import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="h-screen flex flex-col items-center justify-center bg-white text-gray-900"
    >
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <ul className="space-y-4">
        <li className="text-lg">✔️ Web Development</li>
        <li className="text-lg">✔️ Mobile App Development</li>
        <li className="text-lg">✔️ Digital Marketing</li>
        <li className="text-lg">✔️ IT Consulting</li>
      </ul>
    </section>
  );
};

export default Services;
