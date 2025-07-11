import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import '../css/desktopMenu.css';

const DesktopMenu = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Cerrar menú al click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
    };

    if (showCategories) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCategories]);

  return (
    <nav className="desktop-menu">
  <ul>
    <li
      className={`dropdown ${showCategories ? 'show' : ''}`}
      onMouseEnter={() => !isTouch && setShowCategories(true)}
      onMouseLeave={() => !isTouch && setShowCategories(false)}
      ref={dropdownRef}
    >
      <button
        className="dropdown-toggle"
        onClick={() => isTouch && setShowCategories(!showCategories)}
        aria-expanded={showCategories}
        aria-haspopup="true"
      >
        <i className="bi bi-list-ul"></i>
        <span>Categorías</span>
      </button>

      {showCategories && (
        <div className="dropdown-panel">
          <CategoryList isFloating={true} />
        </div>
      )}
    </li>

    <li>
      <Link to="/bestsellers">
        <i className="bi bi-star"></i>
        <span>Más vendidos</span>
      </Link>
    </li>

    <li>
      <Link to="/offers">
        <i className="bi bi-tag"></i>
        <span>Ofertas</span>
      </Link>
    </li>

    <li>
      <Link to="/help">
        <i className="bi bi-info-circle"></i>
        <span>Ayuda</span>
      </Link>
    </li>
  </ul>
</nav>

  );
};

export default DesktopMenu;


