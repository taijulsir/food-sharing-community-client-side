import { Link, NavLink } from "react-router-dom";
import AuthHook from "../CustomHooks/AuthHook";


const Navbar = () => {

  const { user, signOutUser } = AuthHook()
  const handleSignout = () => {
    signOutUser()
      .then()
      .catch(error => {
        console.log(error.message)
      })
  }
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
        <a className=" normal-case text-xl"><img className="w-[204px] lg:w-[310px]  h-[82px] lg:h-[90px]" src="https://i.ibb.co/r5cH53p/logo.png" alt="" /></a>
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

        {user ?       
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <div tabIndex={0} className="w-52 bg-teal-200/60 p-3 shadow-lg menu menu-sm dropdown-content mt-3 z-[1] rounded-box  ">
              <div className="flex items-center space-x-4 p-2 mb-5">
                <img className="h-12 rounded-full" src={user?.photoURL} alt="James Bhatta" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{user?.displayName}</h4>
                  <span className="text-sm tracking-wide flex items-center space-x-1">
                    <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg><span className="text-gray-600">Verified</span>
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {/*My profile  */}
                <li>
                  <Link >
                    <span className="text-gray-600">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <span>My profile</span>
                  </Link>
                </li>

                {/* add foods */}
                <li>
                  <NavLink to='/addFoods' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>
                    <span className="">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </span>
                    <span>Add Food</span>
                  </NavLink>
                </li>

                {/* Manage foods */}
                <li>
                  <NavLink to='/manageFoods' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>
                    <span className="">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span>Manage My Foods</span>
                  </NavLink>
                </li>
                {/* My request foods */}
                <li>
                  <NavLink to='/foodsRequest' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>
                    <span className="">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </span>
                    <span>My Food Request</span>
                  </NavLink>
                </li>
                {/* logout button */}
                <li>
                 
                  <button onClick={handleSignout} className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </span>
                    <span>Logout</span>
                  </button>
                 
                </li>
              </ul>
            </div>
          </div>

          : <div>

            <Link to="/login" className="flex items-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/r5PhbJP/user-svg.png" />
                </div>
              </label>
              <button className="btn bg-teal-500" >Login</button></Link>
          </div>}

      </div>
    </div>
  );
};

export default Navbar;