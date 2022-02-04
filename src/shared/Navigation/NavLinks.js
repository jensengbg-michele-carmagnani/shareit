import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
import { AuthContext } from '../../shared/contex/auth-context';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

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
      {auth.isLoggedIn && (
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/u2/places"
          >
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/places/new"
          >
            ADD PLACE
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/auth"
          >
            AUTHENTICATE
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
