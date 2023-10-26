import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/kasa/" activeclassname="active">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/kasa/about" activeclassname="active">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
