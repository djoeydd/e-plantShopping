import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <>
      <div className="background-image bg-slate-500 w-screen -z-10"></div>
      {/* landing page */}
      <div
        className={`relative flex flex-col items-center justify-center md:flex-row pt-16 px-10 h-screen ${
          showProductList ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-10 text-xl text-white md:space-y-4">
          <h1 className="text-5xl font-bold text-center">
            Welcome To Paradise Nursery
          </h1>
          <hr className="border-t-2 border-green-500 w-1/3" />
          <p className="text-xl text-center">Where green meets serenity!</p>
          <button
            onClick={handleGetStartedClick}
            className="bg-green-500 hover:bg-green-700 text-white  py-2 px-4 rounded"
          >
            Get Started
          </button>
        </div>
        <div className={`mx-16 pt-10 ${showProductList ? "hidden" : ""}`}>
          <p className="text-xl text-white text-center pb-6">
            Welcome to Paradise Nursery, where green meets serenity!{" "}
          </p>
          <p className="text-xl text-white pb-6 hidden md:block">
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
          <p className="text-xl text-white hidden md:block">
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you're a seasoned
            gardener or just starting your green journey, we're here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home
            or office. Join us in our mission to create a greener, healthier
            world. Visit Paradise Nursery today and experience the beauty of
            nature right at your doorstep.
          </p>
        </div>
      </div>
      <div
        className={`absolute w-full h-svh bg-gray-300 bg-opacity-50 overflow-auto z-10 top-0 transform transition-transform duration-500 ${
          showProductList ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ProductList />
      </div>
    </>
  );
}

export default App;
