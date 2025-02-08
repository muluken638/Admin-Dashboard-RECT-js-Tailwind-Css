import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({ name: '', email: '', birthDate: '' });

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedUsers = filteredUsers.filter((user) => user.id !== id);
    setFilteredUsers(updatedUsers);
  };

  const handleEdit = (id) => {
    const editedName = prompt('Enter the new name:');
    if (editedName) {
      setFilteredUsers(
        filteredUsers.map((user) =>
          user.id === id ? { ...user, firstName: editedName } : user
        )
      );
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchResults = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(searchResults);
  };

  const handleDateFilter = (e) => {
    const selectedDate = e.target.value;
    const filteredByDate = users.filter(
      (user) => user.birthDate && user.birthDate.slice(0, 10) === selectedDate
    );
    setFilteredUsers(filteredByDate);
  };

  const handleCreateUser = () => {
    if (!newUser.name || !newUser.email || !newUser.birthDate) return;
    const newUserData = {
      id: users.length + 1,
      firstName: newUser.name,
      email: newUser.email,
      birthDate: newUser.birthDate,
    };
    setFilteredUsers([newUserData, ...filteredUsers]);
    setUsers([newUserData, ...users]);
    setNewUser({ name: '', email: '', birthDate: '' });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management Table</h1>

      {/* Search, Date Filter, and Create User Form */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
        <input
          type="date"
          onChange={handleDateFilter}
          className="border p-2 rounded-md w-full md:w-1/3"
        />
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border p-2 rounded-md"
          />
          <input
            type="date"
            value={newUser.birthDate}
            onChange={(e) => setNewUser({ ...newUser, birthDate: e.target.value })}
            className="border p-2 rounded-md"
          />
          <button
            onClick={handleCreateUser}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
        </div>
      </div>

      {/* Table with overflow-x-auto for horizontal scrolling */}
      <div className="overflow-x-auto max-w-full">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Birth Date</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2 text-center">{user.id}</td>
                <td className="border border-gray-300 p-2">{user.firstName}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">
                  {user.birthDate ? format(new Date(user.birthDate), 'yyyy-MM-dd') : 'N/A'}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
