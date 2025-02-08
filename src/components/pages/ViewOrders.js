import React, { useEffect, useState } from 'react';

function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching orders from the fake API
    fetch('https://jsonplaceholder.typicode.com/todos') // Replace with the actual orders API
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch orders.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">View Orders</h1>

      {/* Table for displaying orders */}
      <div className="overflow-x-auto max-w-full">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Order ID</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Completed</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2 text-center">{order.id}</td>
                <td className="border border-gray-300 p-2">{order.title}</td>
                <td className="border border-gray-300 p-2">{order.completed ? 'Completed' : 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewOrders;
