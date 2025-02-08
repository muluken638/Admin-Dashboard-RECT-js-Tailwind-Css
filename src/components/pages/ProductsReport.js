import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faBoxes, faTag } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ProductsReport = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching products data
    const fetchProductsData = async () => {
      try {
        // Replace this with an actual API call
        const data = [
          { category: 'Electronics', products: 120, stock: 300 },
          { category: 'Clothing', products: 80, stock: 150 },
          { category: 'Home Appliances', products: 50, stock: 100 },
          { category: 'Furniture', products: 30, stock: 50 },
        ];
        setProductsData(data);
      } catch (error) {
        console.error('Error fetching products data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  const productsChartData = {
    labels: productsData.map(item => item.category),
    datasets: [
      {
        label: 'Products',
        data: productsData.map(item => item.products),
        backgroundColor: '#3e95cd',
        borderColor: '#3e95cd',
        borderWidth: 1,
      },
      {
        label: 'Stock',
        data: productsData.map(item => item.stock),
        backgroundColor: '#8e5ea2',
        borderColor: '#8e5ea2',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: productsData.map(item => item.category),
    datasets: [
      {
        data: productsData.map(item => item.products),
        backgroundColor: ['#3e95cd', '#8e5ea2', '#f39c12', '#e74c3c'],
        hoverBackgroundColor: ['#3e95cd', '#8e5ea2', '#f39c12', '#e74c3c'],
      },
    ],
  };

  const totalProducts = productsData.reduce((acc, item) => acc + item.products, 0);
  const totalStock = productsData.reduce((acc, item) => acc + item.stock, 0);

  return (
    <div className="p-2">
      {/* Report Header */}
      <h1 className="text-3xl font-semibold text-center mb-6">Products Report</h1>

      {/* Products Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-2xl font-bold">{totalProducts}</p>
          </div>
          <FontAwesomeIcon icon={faBoxOpen} className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Total Stock</h2>
            <p className="text-2xl font-bold">{totalStock}</p>
          </div>
          <FontAwesomeIcon icon={faBoxes} className="text-4xl text-green-500" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Product Categories</h2>
            <p className="text-2xl font-bold">{productsData.length}</p>
          </div>
          <FontAwesomeIcon icon={faTag} className="text-4xl text-yellow-500" />
        </div>
      </div>

      {/* Products Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Products vs. Stock (Bar Chart)</h2>
          <Bar data={productsChartData} options={{ responsive: true }} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Products Distribution (Pie Chart)</h2>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>

        {/* Pie Chart for Stock */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Stock Distribution (Pie Chart)</h2>
          <Pie
            data={{
              labels: productsData.map(item => item.category),
              datasets: [
                {
                  data: productsData.map(item => item.stock),
                  backgroundColor: ['#3e95cd', '#8e5ea2', '#f39c12', '#e74c3c'],
                  hoverBackgroundColor: ['#3e95cd', '#8e5ea2', '#f39c12', '#e74c3c'],
                },
              ],
            }}
            options={{ responsive: true }}
          />
        </div>
      </div>

      {/* Products Data Table */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <table className="min-w-full overflow-x-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">Category</th>
              <th className="px-4 py-2 text-left border-b">Products</th>
              <th className="px-4 py-2 text-left border-b">Stock</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{item.category}</td>
                <td className="px-4 py-2 border-b">{item.products}</td>
                <td className="px-4 py-2 border-b">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsReport;
