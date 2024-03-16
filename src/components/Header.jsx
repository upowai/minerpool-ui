import { NavLink } from "react-router-dom";
import logo from "../assets/minerPool.png";

const Header = () => {
  return (
    <header className="bg-black text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src={logo} // Adjust the path as needed
            alt="MinerPool Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <h1 className="text-xl font-bold">MinerPool</h1>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/balance" className="hover:text-gray-300">
                Balance
              </NavLink>
            </li>
            <li>
              <NavLink to="/withdraw" className="hover:text-gray-300">
                Withdraw
              </NavLink>
            </li>
            <li>
              <NavLink to="/start-mining" className="hover:text-gray-300">
                Start Mining
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
