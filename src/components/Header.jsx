import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="Header w-full flex p-10 flex-col align-center h-56 justify-between border-b-2 hover:font-bold mb-10">
      <h1 className="font-bold text-6xl text-center">THIS IS : react router dom</h1>
      <nav className="flex justify-evenly text-xl font-semibold">
        <NavLink to="/" className="hover:text-gray-300">
          HOME
        </NavLink>
        <NavLink to="/random" className="hover:text-gray-300">
          RANDOM BEER
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
