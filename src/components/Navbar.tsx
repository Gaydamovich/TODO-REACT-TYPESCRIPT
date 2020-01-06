import React from 'react';
import { NavLink } from "react-router-dom";

export const Menu: React.FC = () => (
  <nav>
    <div className="nav-wrapper green lighten-2 m2">
      <a href="#" className="brand-logo">React + TypeScript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);