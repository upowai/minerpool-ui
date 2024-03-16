import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaWallet,
  FaMoneyBillWave,
  FaRegListAlt,
  FaHammer,
} from "react-icons/fa";

const Home = () => {
  const links = [
    { name: "Balance", to: "/balance", icon: <FaWallet /> },
    { name: "Withdraw", to: "/withdraw", icon: <FaMoneyBillWave /> },
    {
      name: "Latest Withdraws",
      to: "/latest-withdraws",
      icon: <FaRegListAlt />,
    },
    { name: "Start Mining", to: "/start-mining", icon: <FaHammer /> },
  ];

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mt-5">
      <div className="grid grid-cols-2 gap-4">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className="flex flex-col items-center justify-center p-4 text-center bg-gray-800 rounded hover:bg-gray-700 transition-colors text-white"
            activeClassName="bg-gray-900"
          >
            <div className="text-2xl mb-2">{link.icon}</div>
            <div>{link.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
