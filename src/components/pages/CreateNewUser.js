import React, { useState } from 'react';

function CreateNewUser() {
  const [newUser, setNewUser] = useState({
    fullName: '',
    age: '',
    profession: '',
    country: '',
    address: '',
    phoneNumber: '',
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  // Handle form submission
  const handleCreateUser = () => {
    if (!newUser.fullName || !newUser.age || !newUser.profession || !newUser.country || !newUser.address || !newUser.phoneNumber) {
      setError('All fields are required.');
      return;
    }

    const newUserData = {
      ...newUser,
      id: users.length + 1, // Unique ID for each new user
    };

    setUsers([newUserData, ...users]); // Add the new user to the list
    setNewUser({
      fullName: '',
      age: '',
      profession: '',
      country: '',
      address: '',
      phoneNumber: '',
    }); // Reset the form
    setError('');
  };

  return (
    <div className="p-10 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Create New User</h1>

      {/* Error Message */}
      {error && (
        <div className="bg-red-200 text-red-600 p-2 rounded-md mb-4">
          {error}
        </div>
      )}

      {/* New User Form */}
      <div className="space-y-4 container w-full">
        <div className='flex flex-row gap-4'> 
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={newUser.fullName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={newUser.age}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter age"
          />
        </div>

        </div>

        <div>
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            value={newUser.profession}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter profession"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={newUser.country}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter country"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={newUser.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter address"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={newUser.phoneNumber}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter phone number"
          />
        </div>

        {/* Create User Button */}
        <div className="mt-4 text-center">
          <button
            onClick={handleCreateUser}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create User
          </button>
        </div>
      </div>

      {/* Display Created Users */}
      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Created Users:</h2>
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="border-b pb-2">
                <strong>{user.fullName}</strong> | Age: {user.age} | Profession: {user.profession} | Country: {user.country} | Address: {user.address} | Phone: {user.phoneNumber}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CreateNewUser;
