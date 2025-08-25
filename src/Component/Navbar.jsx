import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-6 py-3 text-white">
      <h1 className="text-lg font-bold">Reviewer</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-indigo-400">
          Home
        </Link>
        <Link to="/login" className="hover:text-indigo-400">
          Login/Register
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
