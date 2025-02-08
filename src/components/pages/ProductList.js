import React, { useState, useEffect } from 'react';

// API URL for fetching fake product data (This is a placeholder API for demonstration)
const API_URL = 'https://fakestoreapi.com/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Product Name</th>
            <th className="px-4 py-2 border-b">Category</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 border-b">{product.id}</td>
              <td className="px-4 py-2 border-b">{product.title}</td>
              <td className="px-4 py-2 border-b">{product.category || 'N/A'}</td>
              <td className="px-4 py-2 border-b">${product.price.toFixed(2)}</td>
              <td className="px-4 py-2 border-b">{product.stock || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
