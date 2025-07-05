import React, { useState } from 'react';
import '../css/categoryList.css';

const categories = [
    {
    name: 'Componentes',
    path: '/categoria/componentes',
    subcategories: [
      { name: 'Almacenamiento', path: '/categoria/componentes/almacenamiento' },
      { name: 'Cables y Adaptadores', path: '/categoria/componentes/cables-adaptadores' },
      { name: 'Memorias Flash', path: '/categoria/componentes/memorias-flash' },
      { name: 'Refrigeración', path: '/categoria/componentes/refrigeracion' },
      { name: 'Fuentes', path: '/categoria/componentes/fuentes' },
      { name: 'Gabinetes', path: '/categoria/componentes/gabinetes' },
      { name: 'Memorias RAM', path: '/categoria/componentes/memorias-ram' },
      { name: 'Motherboards', path: '/categoria/componentes/motherboards' },
      { name: 'Procesadores', path: '/categoria/componentes/procesadores' },
      { name: 'Tarjetas de Sonido', path: '/categoria/componentes/tarjetas-sonido' },
      { name: 'Tarjetas de Video', path: '/categoria/componentes/tarjetas-video' },
      { name: 'Unidades Ópticas', path: '/categoria/componentes/unidades-opticas' },
    ],
  },
  {
    name: 'Computadoras',
    path: '/categoria/computadoras',
    subcategories: [
      { name: 'Escritorio', path: '/categoria/computadoras/escritorio' },
      { name: 'Notebooks', path: '/categoria/computadoras/notebooks' },
      { name: 'Mochilas / Bolsos / Cases', path: '/categoria/computadoras/mochilas-bolsos-cases' },
    ],
  },
  {
    name: 'Electrónica',
    path: '/categoria/electronica',
    subcategories: [
      { name: 'Pilas y Cargadores', path: '/categoria/electronica/pilas-cargadores' },
      { name: 'Smart Devices', path: '/categoria/electronica/smart-devices' },
      { name: 'Soportes', path: '/categoria/electronica/soportes' },
      { name: 'Televisores', path: '/categoria/electronica/televisores' },
    ],
  },
  { name: 'Smartwatches', path: '/categoria/smartwatch' },
  { name: 'Celulares', path: '/categoria/celulares' },
  { name: 'Tablets', path: '/categoria/tablets' },
  {
    name: 'Gaming / Streaming',
    path: '/categoria/gaming-streaming',
    subcategories: [
      { name: 'Consolas', path: '/categoria/gaming-streaming/consolas' },
      { name: 'Elgato - Streaming', path: '/categoria/gaming-straming/elgato-straming' },
      { name: 'Joysticks / Volantes / ACC', path: '/categoria/gaming-streaming/joysticks-volantes-acc' },
    ],
  },
  {
    name: 'Oficina',
    path: '/categoria/oficina',
    subcategories: [
      { name: 'Impresoras', path: '/categoria/oficina/impresoras' },
      { name: 'Lectores de Barras', path: '/categoria/oficina/lectores-barras' },
      { name: 'Proyectores', path: '/categoria/oficina/proyectores' },
      { name: 'Scanners', path: '/categoria/oficina/scanners' },
      { name: 'Sillas', path: '/categoria/oficina/sillas' },
      { name: 'Telefonía', path: '/categoria/oficina/telefonia' },
      { name: 'UPS', path: '/categoria/oficina/ups' },
    ],
  },
  {
    name: 'Periféricos',
    path: '/categoria/perifericos',
    subcategories: [
      { name: 'Cámaras Web', path: '/categoria/perifericos/camaras-web' },
      { name: 'Micrófonos', path: '/categoria/perifericos/microfonos' },
      { name: 'Monitores', path: '/categoria/perifericos/monitores' },
      { name: 'Mouse', path: '/categoria/perifericos/mouse' },
      { name: 'Mouse Pads', path: '/categoria/perifericos/mouse-pads' },
      { name: 'Parlantes', path: '/categoria/perifericos/parlantes' },
      { name: 'Presentadores', path: '/categoria/perifericos/presentadores' },
      { name: 'Teclados', path: '/categoria/perifericos/teclados' },
      { name: 'Vinchas y Auriculares', path: '/categoria/perifericos/vinchas-auriculares' },
    ],
  },
  
  {
    name: 'Redes y Adaptadores',
    path: '/categoria/redes-adaptadores',
    subcategories: [
      { name: 'Accesorios de Red', path: '/categoria/redes-adaptadores/accesorios-de-red' },
      { name: 'Access Point', path: '/categoria/redes-adaptadores/access-point' },
      { name: 'Antenas y Receptores', path: '/categoria/redes-adaptadores/antenas-y-receptores' },
      { name: 'Bobinas y Patchcords', path: '/categoria/redes-adaptadores/bobinas-y-patchcords' },
      { name: 'Extensores', path: '/categoria/redes-adaptadores/extensores' },
      { name: 'Fibra Óptica', path: '/categoria/redes-adaptadores/fibra-optica' },
      { name: 'Patcheras', path: '/categoria/redes-adaptadores/patcheras' },
      { name: 'Powerline', path: '/categoria/redes-adaptadores/powerline' },
      { name: 'Racks', path: '/categoria/redes-adaptadores/racks' },
      { name: 'Range Extender', path: '/categoria/redes-adaptadores/range-extender' },
      { name: 'Routers', path: '/categoria/redes-adaptadores/routers' },
      { name: 'Sensores', path: '/categoria/redes-adaptadores/sensores' },
      { name: 'Switches', path: '/categoria/redes-adaptadores/switches' },
      { name: 'Tarjetas de Red', path: '/categoria/redes-adaptadores/tarjetas-de-red' },
    ],
  },
  {
    name: 'Software',
    path: '/categoria/software',
    subcategories: [
      { name: 'Antivirus', path: '/categoria/software/antivirus' },
      { name: 'Ofimática', path: '/categoria/software/ofimatica' },
      { name: 'Sistemas Operativo', path: '/categoria/software/sistemas-operativos' },
    ],
  },
  { name: 'Varios', path: '/categoria/smartwatches' },
];

const CategoryList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleNavigation = (path) => {
    console.log(`Ir a: ${path}`);
    // Usar navigate(path) si usás react-router
  };

  return (
    <div className="category-list">

      {categories.map((cat, index) => {
        const isExpanded = expandedIndex === index;
        const hasSub = !!cat.subcategories;

        return (
          <div key={index} className="category-item">
            <div
              className={`category-header ${isExpanded ? 'expanded' : ''}`}
              onClick={() => (hasSub ? handleToggle(index) : handleNavigation(cat.path))}
            >
              <span className="category-name">{cat.name}</span>
              {hasSub && (
                <span className="category-icon">
                  {isExpanded ? '-' : '+'}
                </span>
              )}
            </div>

            {hasSub && isExpanded && (
              <ul className="subcategory-list">
                {cat.subcategories.map((sub, subIdx) => {
                  const isSelected = selectedSubcategory === sub.path;

                  return (
                    <li
                      key={subIdx}
                      className={`subcategory-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedSubcategory(sub.path);
                        handleNavigation(sub.path);
                      }}
                    >
                      {sub.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
