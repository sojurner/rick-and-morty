import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import routesList from '../assets/routes';
import DynamicImports from './DynamicImports';

const Routes = props => {
  const routeViews: object[] = routesList.map(route => {
    const { path, import_path } = route;

    return (
      <Route
        path={path}
        render={match => {
          return (
            <DynamicImports load={() => import(`${import_path}`)} match={match}>
              {Component => {
                return !Component ? (
                  <h1>Loading...</h1>
                ) : (
                  <Component {...props} />
                );
              }}
            </DynamicImports>
          );
        }}
      />
    );
  });
  return <Switch>{routeViews}</Switch>;
};

export default Routes;
