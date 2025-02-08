import React, { useState } from 'react';

function SettingsPage() {
  const [theme, setTheme] = useState('light');  // For theme selection (light or dark)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);  // Notifications setting
  const [language, setLanguage] = useState('en');  // Language selection (default: English)

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleNotificationChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* System Settings Section */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">System Settings</h2>
        
        {/* Theme Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Theme</label>
          <select 
            value={theme} 
            onChange={handleThemeChange} 
            className="border p-2 rounded-md w-full"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Notifications Setting */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          <label className="text-gray-700">Enable Notifications</label>
        </div>

        {/* Language Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Language</label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="border p-2 rounded-md w-full"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        {/* Save Button */}
        <button
          onClick={() => alert('Settings Saved!')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
