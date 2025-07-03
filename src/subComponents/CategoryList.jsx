import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categorias }) => {
  const [open, setOpen] = useState(null);

  const toggleCategoria = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="categoria-container">
      {categorias.map((categoria, index) => (
        <div key={index} className="categoria-item">
          <div
            className="categoria-titulo"
            onClick={() => toggleCategoria(index)}
          >
            <h3>{categoria.nombre}</h3>
            <span className={`flecha ${open === index ? 'rotada' : ''}`}>▶</span>
          </div>

          <div className={`subcategorias-wrapper ${open === index ? 'open' : ''}`}>
            {categoria.subcategorias.length > 0 && (
              <ul className="subcategorias">
                {categoria.subcategorias.map((sub, idx) => (
                  <li key={idx}>
                    <Link to={`/productos/${sub.toLowerCase().replace(/\s+/g, '-')}`}>
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
