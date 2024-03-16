import React from "react";
import { FaDonate } from "react-icons/fa"; // Using a Bitcoin icon as an example

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <FaDonate className="mx-auto text-yellow-500 text-6xl" />
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Welcome to uPow Ai-MinerPool
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
            Join our community and start mining with efficiency and ease. Get
            the most out of your mining operations today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
