import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg">Your one-stop solution for all services!</p>
      </div>
    </section>
  );
};

export default Home;
