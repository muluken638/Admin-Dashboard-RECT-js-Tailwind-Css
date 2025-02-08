import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/150?img=3'); // Example avatar image

  const handleEditAvatar = () => {
    // Logic to edit the avatar, for example, opening a file upload dialog
    alert('Avatar editing feature coming soon!');
  };

  const handleEditInfo = () => {
    // Logic to edit the personal information
    alert('Edit personal information feature coming soon!');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        {/* Avatar Section */}
        <div className="relative">
          <img 
            src={avatar} 
            alt="User Avatar" 
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <button
            onClick={handleEditAvatar}
            className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaEdit className="text-blue-500" size={20} />
          </button>
        </div>

        {/* Personal Information Section */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">{email}</p>

          {/* Edit Info Button */}
          <button 
            onClick={handleEditInfo}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
