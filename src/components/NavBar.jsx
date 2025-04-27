import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";

const NavBar = () => {
  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/products"}>Products</NavLink>
      </li>
    </>
  );
    return (
      <div className="navbar bg-gray-200 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-gray-200 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-300 rounded-box z-1 mt-5 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            T-Mart
          </Link>
        </div>
        <div className="navbar-center   hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <Link to="/cart" className="btn ">
            <IoMdCart />
          </Link>
        </div>
      </div>
    );
};

export default NavBar;