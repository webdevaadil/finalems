import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-md navbar-dark bg-warning mb-3 ">
    {/* Brand  */}
    <Link className="navbar-brand text-dark" to="/dashboard">
      Admin Dashboard
    </Link>

    {/* Toggler/collapsibe Button  */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/addemployee">
            Add Employee
          </Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/addproject">
            Add Project
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/assignproject">
            Assignproject 
          </Link>
        </li>
       
       
      </ul>
    </div>
  </nav></div>
  )
}
