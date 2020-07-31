import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <div>
      <div className="gradientDiv" />
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Johnflix Logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo video
        </Button>
      </nav>
    </div>
  );
}

export default Menu;
