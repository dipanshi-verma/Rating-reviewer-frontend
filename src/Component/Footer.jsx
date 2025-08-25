import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Reviewer. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/login" className="hover:text-indigo-400">Login/Register</Link>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
