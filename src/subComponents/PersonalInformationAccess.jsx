import React from 'react'
import user from '../images/user.webp'
import { Link } from 'react-router-dom';
import '../css/personalInformationAccess.css';

const PersonalInformationAccess = ({ user, onLogout }) => {
  if (!user) return null;

  return (
    <div className="user-menu">
      <div className="user-info">
        <img src={user.photo} alt="Foto de perfil" className="user-photo" />
        
    </div>

      <ul className="user-options">
        <div className="user-name">{user.firstName} {user.lastName}
       </div>
        <li>
          <Link to="/perfil"><i class="bi bi-pencil"></i>Administrar perfil</Link>
        </li>
        <li>
          <button onClick={onLogout}><i class="bi bi-box-arrow-right"></i>Cerrar sesión</button>
        </li>
      </ul>
    </div>
  );
};

export default PersonalInformationAccess;