"use client"

import { useState } from "react";
import { FaHome, FaBook, FaUsers, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link, Routes, Route } from "react-router-dom";
import Books from "./Books";
import Users from "./Users";
import Settings from "./Settings";
import "../Dashboard.css";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }


  return (
    <div className="dashboard">
     
      
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/dashboard">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/books">
              <FaBook /> Books
            </Link>
          </li>
          <li>
            <Link to="/dashboard/users">
              <FaUsers /> Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings">
              <FaCog /> Settings
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </div>
 
     

      <div className="main-content">
       
        <Routes>
          <Route path="/" element={<h1>Welcome to the Dashboard</h1>} />
    
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

       
      </div>
    
    </div>
  )
}

export default Dashboard

