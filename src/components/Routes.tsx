import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import routesList from '../assets/routes';
import DynamicImports from './DynamicImports';

const Routes = props => {
  const routeViews: object[] = routesList.map(route => {
    const { path, component } = route;

    return <Route path={path} component={component} />;
  });
  return <Switch>{routeViews}</Switch>;
};

export default Routes;
