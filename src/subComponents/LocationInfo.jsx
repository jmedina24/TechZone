import React, { useEffect, useState } from 'react';

const LocationInfo = () => {
  const [location, setLocation] = useState({ city: '', country: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://ipinfo.io/json?token=')
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta de ipinfo');
        return res.json();
      })
      .then(data => {
        setLocation({ city: data.city, country: data.country });
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  if (error) return <p style={{ fontSize: '0.9rem', color: 'red' }}>No se pudo obtener la ubicación</p>;

  return (
    <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
      <i className="bi bi-geo-alt-fill" style={{ color: '#0081EA', fontSize: '1rem' }}></i>
      {location.city && location.country
        ? `${location.city}, ${location.country}`
        : 'Cargando ubicación...'}
    </p>
  );
};

export default LocationInfo;
