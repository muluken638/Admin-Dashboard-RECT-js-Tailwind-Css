import React, { useEffect, useState } from 'react';

function ViewReturns() {
  const [returns, setReturns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching returns from a fake API
    fetch('https://jsonplaceholder.typicode.com/todos') // Replace with actual returns API
      .then((response) => response.json())
      .then((data) => {
        setReturns(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch returns.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading returns...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">View Returns</h1>

      {/* Table for displaying returns */}
      <div className="overflow-x-auto max-w-full">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Return ID</th>
              <th className="border border-gray-300 p-2">Order ID</th>
              <th className="border border-gray-300 p-2">Product Name</th>
              <th className="border border-gray-300 p-2">Reason</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((returnRequest) => (
              <tr key={returnRequest.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2 text-center">{returnRequest.id}</td>
                <td className="border border-gray-300 p-2">{returnRequest.userId}</td> {/* Assuming order ID as userId */}
                <td className="border border-gray-300 p-2">{returnRequest.title}</td> {/* Placeholder for product name */}
                <td className="border border-gray-300 p-2">No reason provided</td> {/* Placeholder for reason */}
                <td className="border border-gray-300 p-2">{returnRequest.completed ? 'Processed' : 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewReturns;
