import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    language: 'en',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the settings to a backend or local storage
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label htmlFor="darkMode">
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleInputChange}
            />
            Dark Mode
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="emailNotifications">
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleInputChange}
            />
            Email Notifications
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleInputChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button type="submit" className="save-button">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
