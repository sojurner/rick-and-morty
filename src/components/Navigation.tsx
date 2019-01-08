import * as React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

interface INavigationProps {
  routes: string[];
}

const Navigation = (props: INavigationProps) => {
  const { routes } = props;
  return (
    <nav>
      {routes.map((link, index) => {
        return (
          <NavLink key={`link-${index}`} to={`/${link}/1`} className="navlink">
            {link}
            <img src="https://img.icons8.com/ios/50/000000/rick-sanchez.png" />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
