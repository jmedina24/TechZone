import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsBySubCategory = () => {
  const { subcategory } = useParams();

  return (
    <div>
      <h2>Productos en: {formatSubcategory(subcategory)}</h2>

      {/* Aquí iría la lógica para filtrar y mostrar productos */}
      <p>Aquí se listarán los productos de la subcategoría "{subcategory}"</p>
    </div>
  );
};

// Función para mostrar el nombre con espacios y capitalización
const formatSubcategory = (texto) => {
  return texto
    .split('-')
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');
};

export default ProductsBySubCategory;
