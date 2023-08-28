import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/" activeclassname="active">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
