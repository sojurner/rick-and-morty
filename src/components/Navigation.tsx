import * as React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

interface INavigationProps {
  routes: string[];
}

const Navigation = (props: INavigationProps) => {
  const { routes } = props;
  return (
    <nav className="nav-group">
      {routes.map((link, index) => {
        return (
          <NavLink key={`link-${index}`} to={`/${link}/1`} className="navlink">
            {link}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
