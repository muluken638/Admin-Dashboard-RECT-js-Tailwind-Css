import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faUser,
  faBox,
  faShoppingCart,
  faChartBar,
  faCog,
  faSignOutAlt,
  faUserCog,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FaSyncAlt } from 'react-icons/fa';

const Sidebar = ({ setActiveItem }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const mainLinks = [
    { name: 'Dashboard', icon: faTachometerAlt, path: '/' },
    {
      name: 'User Management',
      icon: faUser,
      path: '/user-management',
      submenu: [
        { name: 'Create New User', path: '/user-management/create' },
        { name: 'View All Users', path: '/user-management/view' },
        { name: 'Update User', path: '/user-management/update' },
        { name: 'Delete User', path: '/user-management/delete' },
      ],
    },
    {
      name: 'Product Management',
      icon: faBox,
      path: '/product-management',
      submenu: [
        { name: 'Create Product', path: '/product-management/create' },
        { name: 'View All Products', path: '/product-management/view' },
        { name: 'Update Product', path: '/product-management/update' },
        { name: 'Delete Product', path: '/product-management/delete' },
      ],
    },
    {
      name: 'Order Management',
      icon: faShoppingCart,
      path: '/order-management',
      submenu: [
        { name: 'View Orders', path: '/order-management/view' },
        { name: 'Manage Returns', path: '/order-management/returns' },
      ],
    },
    {
      name: 'Reports',
      icon: faChartBar,
      path: '/reports',
      submenu: [
        { name: 'Sales Report', path: '/reports/sales' },
        { name: 'Products Report', path: '/reports/products' },
      ],
    },
    { name: 'Settings', icon: faCog, path: '/settings' },
  ];

  const footerLinks = [
    { name: 'Profile Settings', icon: faUserCog, path: '/profile-settings' },
    { name: 'Logout', icon: faSignOutAlt, path: '/logout' },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const handleMainLinkClick = (event, link, index) => {
    // Prevent navigation if submenu exists and toggle submenu
    if (link.submenu) {
      event.preventDefault();
      toggleSubmenu(index);
    }
  };

  return (
    <div className="h-screen background-color w-64 flex flex-col">
      {/* Site Name */}
      <div className="h-20vh py-5 bg-white text-black flex items-center justify-center text-2xl font-bold">
        Staff <FaSyncAlt color='blue-500' size={14} />
      </div>
      <div className="border"></div>

      {/* Main Links */}
      <div className="flex-1 h-70vh overflow-y-auto">
        <ul className="space-y-2 px-4 py-6">
          {mainLinks.map((link, index) => (
            <li key={index}>
              <div>
                {/* Main Link */}
                <NavLink
                  to={link.path}
                  onClick={(event) => handleMainLinkClick(event, link, index)} // Handle main link click
                  onMouseEnter={() => setActiveItem(link.name)} // Set the active item
                  className={({ isActive }) =>
                    `flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer sidebar-text ${
                      isActive ? 'bg-#4956F4 text-white' : 'hover:bg-blue-800 hover:text-white'
                    }`
                  }
                >
                  <FontAwesomeIcon icon={link.icon} className="text-xl" />
                  <span>{link.name}</span>

                  {/* Submenu Icon */}
                  {link.submenu && (
                    <FontAwesomeIcon
                      icon={activeSubmenu === index ? faArrowUp : faArrowDown}
                      className="ml-auto"
                      onClick={() => toggleSubmenu(index)}
                    />
                  )}
                </NavLink>

                {/* Submenu */}
                {link.submenu && activeSubmenu === index && (
                  <ul className="pl-8 space-y-1">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subLink.path}
                          onClick={() => setActiveItem(subLink.name)} // Set the active item
                          className={({ isActive }) =>
                            `flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer sidebar-text ${
                              isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-600 hover:text-white'
                            }`
                          }
                        >
                          <span>{subLink.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Links */}
      <div className="px-4 py-6 border-t border">
        <ul className="space-y-2">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                onClick={() => setActiveItem(link.name)} // Set the active item
                className={({ isActive }) =>
                  `flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer sidebar-text ${
                    isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`
                }
              >
                {link.icon === 'avatar' ? (
                  <img
                    src="https://randomuser.me/api/portraits/men/30.jpg" // Replace with actual avatar image URL
                    alt="Admin Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FontAwesomeIcon icon={link.icon} className="text-xl" />
                )}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
