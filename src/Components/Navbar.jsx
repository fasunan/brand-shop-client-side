

import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    userLogOut().then().catch();
  };
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/signUp"}>SignUp</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/addToCart"}><button className="flex"><BsCart4 className='text-cyan-500 mr-1  text-lg'></BsCart4>My Cart</button></NavLink>
      </li>

    </>
  );
  return (
    <div>
      <div className="navbar text-purple-500 p-4 shadow-lg font-bold absolute z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.ibb.co/NjJdxNV/Ph-Xwt-RXN-400x400.jpg" />
            </div>
          </div>
          <p className="text-xl ml-4 text-red-500">TECH-LAND</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <p>{user?.displayName}</p>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>

          {user ? (
            <button
              onClick={handleLogOut}
              className="h-8 w-16 rounded bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900 text-sm text-red-400"
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className=" h-8 w-16 rounded bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900 text-red-400 ">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
