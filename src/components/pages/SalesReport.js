import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching sales data
    const fetchSalesData = async () => {
      try {
        // Replace this with actual API call
        const data = [
          { month: 'January', sales: 200, revenue: 5000 },
          { month: 'February', sales: 150, revenue: 4000 },
          { month: 'March', sales: 180, revenue: 4500 },
          { month: 'April', sales: 220, revenue: 5500 },
        ];
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  const salesChartData = {
    labels: salesData.map(item => item.month),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map(item => item.sales),
        borderColor: '#3e95cd',
        backgroundColor: 'rgba(62, 149, 205, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const revenueChartData = {
    labels: salesData.map(item => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: salesData.map(item => item.revenue),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const salesGrowthChartData = {
    labels: salesData.map(item => item.month),
    datasets: [
      {
        label: 'Sales Growth',
        data: salesData.map(item => ((item.sales - salesData[0].sales) / salesData[0].sales) * 100), // Simple growth calculation
        borderColor: '#fbc02d',
        backgroundColor: 'rgba(251, 192, 45, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const totalSales = salesData.reduce((acc, item) => acc + item.sales, 0);
  const totalRevenue = salesData.reduce((acc, item) => acc + item.revenue, 0);

  return (
    <div className="p-1">
      {/* Report Header */}
      <h1 className="text-3xl font-semibold text-center mb-6">Sales Report</h1>

      {/* Sales Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold">{totalSales}</p>
          </div>
          <FontAwesomeIcon icon={faShoppingCart} className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
          </div>
          <FontAwesomeIcon icon={faDollarSign} className="text-4xl text-green-500" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Sales Growth</h2>
            <p className="text-2xl font-bold">+15%</p>
          </div>
          <FontAwesomeIcon icon={faChartLine} className="text-4xl text-yellow-500" />
        </div>
      </div>

      {/* Sales Trend, Revenue Trend, and Growth Trend - One Row, Three Columns on Large Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
        {/* Sales Trend */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Trend</h2>
          <Line data={salesChartData} options={{ responsive: true }} />
        </div>

        {/* Revenue Trend */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
          <Line data={revenueChartData} options={{ responsive: true }} />
        </div>

        {/* Sales Growth Trend */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Growth Trend</h2>
          <Line data={salesGrowthChartData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Sales Data Table */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Sales Details</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">Month</th>
              <th className="px-4 py-2 text-left border-b">Sales</th>
              <th className="px-4 py-2 text-left border-b">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{item.month}</td>
                <td className="px-4 py-2 border-b">{item.sales}</td>
                <td className="px-4 py-2 border-b">${item.revenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
