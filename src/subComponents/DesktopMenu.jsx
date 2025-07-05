import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import '../css/desktopMenu.css';

const DesktopMenu = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <nav className="desktop-menu">
      <ul>
        <li
          className="dropdown"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
          ref={dropdownRef}
        >
          <button className="dropdown-toggle">
            Categorías
          </button>

          {showCategories && (
            <div className="dropdown-panel">
              <CategoryList isFloating={true} />
            </div>
          )}
        </li>

        <li><Link to="/bestsellers">Más vendidos</Link></li>
        <li><Link to="/offers">Ofertas</Link></li>
        <li><Link to="/help">Ayuda</Link></li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
