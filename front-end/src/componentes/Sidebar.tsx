import { NavLink } from 'react-router-dom';
import imovel from '../assets/imovel.svg'
import cliente from '../assets/clientes.svg'
import menu from '../assets/menu.svg'
import { useState } from 'react';
import inicio from '../assets/casa-disponivel copy.svg'

function Sidebar () {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar d-flex flex-column flex-shrink-0 text-white bg-dark vh-100  ${isOpen ? 'open' : 'closed'}`}>
      <ul className="nav nav-pills flex-column mb-auto px-2 mt-3">
        <li>
          <div
            className="nav-link text-white d-flex align-items-center gap-2 toggle-btn"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={menu} alt="Menu" width={20} height={14} />
            {isOpen && <span>Menu</span>}
          </div>
        </li>
        <li>
          <NavLink to="/" className="nav-link text-white d-flex align-items-center gap-2">
            <img src={inicio} alt="Início" width={20} height={14} />
            {isOpen && <span>Início</span>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/imoveis" className="nav-link text-white d-flex align-items-center gap-2">
            <img src={imovel} alt="Imóveis" width={20} />
            {isOpen && <span>Imóveis</span>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/clientes" className="nav-link text-white d-flex align-items-center gap-2">
            <img src={cliente} alt="Clientes" width={20} />
            {isOpen && <span>Clientes</span>}
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;