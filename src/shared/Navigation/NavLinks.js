import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/user"
        >
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/u1/places"
        >
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/places/new"
        >
          ADD PLACES
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/auth"
        >
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
