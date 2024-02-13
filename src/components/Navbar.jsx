import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';

export function Navbar() {
    const [nav, setNav] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const location = useLocation()

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between z-10 items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <Link to="/">
            <img
            src="/assets/images/logo.svg"
            />
        </Link>
      </div>
      <div className="topp">
        <ul className="hidden md:flex midd">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`p-4 cursor-pointer capitalize font-medium text-white hover:text-gray-300 ${location.pathname === `/${link}` ? 'text-gray-300 border-b-4 ': ''}`}
            >
              <Link onClick={() => setIsActive(!isActive)} className="" to={link} >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden hover:text-white"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
                <Link
                onClick={() => setNav(false)}
                to={link}
                className="hover:text-white"
              >
                {link}
              </Link>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
