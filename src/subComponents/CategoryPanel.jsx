import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsBySubCategory from './ProductsBySubCategory';
import CategoryList from './CategoryList';
import '../css/categoryPanel.css';
const CategoryPanel = ({ visible, onClose }) => {
  useEffect(() => {
    // Bloqueo del scroll
    document.body.style.overflow = visible ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [visible]);

  if (!visible) return null;

  const categorias = [
  {
    nombre: "Componentes",
    subcategorias: ["Almacenamiento", "Cables y adaptadores", "Memorias Flash", "Refrigeración", "Fuentes", "Gabinetes", "Memorias RAM", "Motherboards", "Procesadores", "Tarjetas de sonido", "Tarjetas de video", "Unidades Ópticas"]
  },
  {
    nombre: "Computadoras",
    subcategorias: ["Escritorio", "Notebooks", "Mochilas / Bolsos / Cases"]
  },
  {
    nombre: "Electrónica",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Smartwaches",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Celulares",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Tablets",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Gaming / Streaming",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Oficina",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Periféricos",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Car Audio",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Redes / Adaptadores",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Software",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Varios",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  },
  {
    nombre: "Seguridad",
    subcategorias: ["Pilas y Cargadores", "Smart Devices", "Soportes", "Televisores"]
  }
];
    return (
    <>
        {/* Fondo oscuro */}
        <div className='overlay' onClick={onClose}></div>

        {/* Panel de buscador */}
        <div className='category__panel'>
            <button className='panel__search-btn' onClick={onClose}><i className="bi bi-arrow-left"></i></button>
            
                    <div className="app-container">
                    <h2>Categorías</h2>
                    <Routes>
                        <Route path="/" element={<CategoryList categorias={categorias} />} />
                        <Route path="/productos/:subcategoria" element={<ProductsBySubCategory />} />
                    </Routes>
                    </div>
            
        </div>
    </>
  )
}

export default CategoryPanel