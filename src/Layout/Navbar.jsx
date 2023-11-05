import { NavLink } from "react-router-dom";


const Navbar = () => {

  const navlinks =
    <>
      <li className="text-lg font-bold mr-2"><NavLink to='/' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
      <li className="text-lg font-bold mr-2"><NavLink to='/availableFoods' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>Available Foods</NavLink></li>
      <li className="text-lg font-bold mr-2"><NavLink to='/blogs' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>Blogs</NavLink></li>
      <li className="text-lg font-bold mr-2"><NavLink to='/about' className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>About Us</NavLink></li>



    </>
  return (
    <div className="navbar bg-teal-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>
        <a className=" normal-case text-xl"><img className="w-[204px] lg:w-[310px]  h-[82px] lg:h-[100px]" src="/public/logo.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/public/user.svg.png" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className="text-lg font-bold mr-2"><NavLink to='/addFoods' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}>Add Foods</NavLink></li>
            <li className="text-lg font-bold mr-2"><NavLink to='/manageFoods' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}>Manage My Foods</NavLink></li>
            <li className="text-lg font-bold mr-2"><NavLink to='/foodsRequest' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}>My Food Request</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;