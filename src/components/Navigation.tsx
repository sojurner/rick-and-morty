import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withPropsOnChange } from 'recompose';

import '../styles/Navigation.css';

interface INavigationProps {
  routes: string[];
  pageView: { characters: number; episodes: number; locations: number };
}

const Navigation = ({ pageView }) => {
  const routes: { route: string; icon: string }[] = [
    {
      route: 'characters',
      icon:
        'http://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/512/rick-icon.png'
    },
    {
      route: 'locations',
      icon:
        'http://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/512/alien-ship-icon.png'
    },
    { route: 'episodes', icon: 'https://i.redd.it/sz1nfssmu4cx.png' }
  ];
  return (
    <nav className="nav-group">
      {routes.map((link, index) => {
        return (
          <NavLink
            key={`link-${index}`}
            exact
            to={`/${link.route}/${pageView[link.route]}`}
            className="navlink"
          >
            <img src={link.icon} className="rick-icon" />
            {link.route}
          </NavLink>
        );
      })}
    </nav>
  );
};

const mapStateToProps = state => ({
  pageView: state.pageView
});

export default connect(mapStateToProps)(Navigation);
