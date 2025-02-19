"use client"

import { useState } from "react"



const Settings = () => {
  
  
 
 

  const handleSubmit = (e) => {

    e.preventDefault()
    
    console.log("Settings saved:", settings)
    alert("Password Updated Successfully!")
  }

  return (
    <div className="settings-container">
      <h1>Update Password</h1>
      <form onSubmit={handleSubmit} className="settings-form">
       <div>
        <input type="text"  placeholder="email"/>
       </div>
       <div>
        <input type="password"  placeholder="New Password"/>
       </div>
       <div>
        <input type="password"  placeholder="Confirm Password"/>
       </div>


      
       
        <button type="submit" className="update-button">
          Update Password
        </button>
      </form>
    </div>
  )
}

export default Settings

