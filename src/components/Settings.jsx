"use client"

import { useState } from "react"
import { FaMoon, FaEnvelope, FaGlobe, FaBook } from "react-icons/fa"

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    language: "en",
    preferredGenre: "fiction",
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically save the settings to a backend or local storage
    console.log("Settings saved:", settings)
    alert("Settings saved successfully!")
  }

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label htmlFor="darkMode" className="checkbox-label">
            <FaMoon className="icon" />
            <span>Dark Mode</span>
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="emailNotifications" className="checkbox-label">
            <FaEnvelope className="icon" />
            <span>Email Notifications</span>
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="language" className="select-label">
            <FaGlobe className="icon" />
            <span>Language</span>
          </label>
          <select id="language" name="language" value={settings.language} onChange={handleInputChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="preferredGenre" className="select-label">
            <FaBook className="icon" />
            <span>Preferred Book Genre</span>
          </label>
          <select
            id="preferredGenre"
            name="preferredGenre"
            value={settings.preferredGenre}
            onChange={handleInputChange}
          >
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>
        </div>
        <button type="submit" className="save-button">
          Save Settings
        </button>
      </form>
    </div>
  )
}

export default Settings

