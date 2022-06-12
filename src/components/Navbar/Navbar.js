import CartWidget from '../CartWidget';
 
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';



export const Navbar = () => {
  return (
        <div className= "container">
          <nav className="nav">
            <div className="brand1">
              <NavLink className="nav__link" to='/Home'>Zona Padel</NavLink>
            </div>
            <ul className="nav__list">
              <li>
                <NavLink className="nav__link" to='Productos'>Productos</NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to='Carrito'>
                  <CartWidget />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
  );
}

export default Navbar; 