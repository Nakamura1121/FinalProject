import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li><Link className="text-white" to="/">Home</Link></li>
          <li><Link className="text-white" to="/about">About</Link></li>
          <li><Link className="text-white" to="/contact">Contact</Link></li>
          <li><Link className="text-white" to="/products">Products</Link></li>
          <li><Link className="text-white" to="/register">Products</Link></li>
          <li><Link className="text-white" to="/login">Products</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
