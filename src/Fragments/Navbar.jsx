import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full z-50 bg-transparent">
      <div className="navbar shadow-sm bg-transparent backdrop-blur-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow space-y-2"
            >
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">AniMovie</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-6">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <Button className="btn btn-info"
          onClick={()=>navigate('/login')}>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
