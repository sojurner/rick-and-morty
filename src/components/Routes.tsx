import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Characters from './Characters';
import Locations from './Locations';
import Episodes from './Episodes';

import DynamicImports from './DynamicImports';

const Routes = props => {
  const routesList: any[] = [
    {
      paths: '/characters/:id',
      key: 'characters',
      main: Characters
    },
    {
      paths: '/locations/:id',
      key: 'locations',
      main: Locations
    },
    {
      paths: '/episodes/:id',
      key: 'episodes',
      main: Episodes
    }
  ];

  const mainRoutes = routesList.map((routes, index) => {
    const { key, main } = routes;
    return <Route path={`/${key}`} component={main} />;
  });

  const routeViews: object[] = routesList.map((routes, index) => {
    const { paths, children, key } = routes;
    const route = (
      <Route
        key={`route-${index}`}
        path={paths}
        render={({ match }) => {
          const id = match.params.id;
          const matchingPage = props.state[key][id];
          return (
            <DynamicImports load={() => import('./PageView')}>
              {Component => {
                return !Component ? (
                  <h1>Loading...</h1>
                ) : (
                  <Component category={key} matchingPage={matchingPage} />
                );
              }}
            </DynamicImports>
          );
        }}
      />
    );
    console.log(route);
    return route;
  });
  return (
    <div>
      {mainRoutes}
      <Switch>{routeViews}</Switch>
    </div>
  );
};

const mapStateToProps = (state: object) => ({
  state
});

export default withRouter(connect(mapStateToProps)(Routes));
