import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, icon, value, percentage, color }) => {
  return (
    <div className="flex flex-col  bg-white p-4 rounded-lg shadow-lg space-y-4">
      <div className="flex items-center space-x-2 justify-start">
        <FontAwesomeIcon icon={icon} className="text-3xl text-blue-700" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-3xl font-semibold">{value}</div>
        <div
          className={`text-xl font-medium ${
            color === 'green'
              ? 'text-green-500  bg-green-200 p-1 rounded-lg'
              : color === 'red'
              ? 'text-red-  bg-red-200 p-1 rounded-lg'
              : 'text-yellow-500  bg-yellow-200 p-1 rounded-lg'
          }`}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default Card;
