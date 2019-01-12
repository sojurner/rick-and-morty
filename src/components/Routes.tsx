import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Loading from './Loading';
import PageHeader from './PageHeader';

import DynamicImports from './DynamicImports';

const Routes = props => {
  const routesList: any[] = [
    {
      paths: '/characters/:id',
      key: 'characters'
    },
    {
      paths: '/locations/:id',
      key: 'locations'
    },
    {
      paths: '/episodes/:id',
      key: 'episodes'
    }
  ];

  const mainRoutes = routesList.map((routes, index) => {
    const { key, main } = routes;
    return (
      <Route key={`header-${index}`} path={`/${key}`} component={PageHeader} />
    );
  });

  const routeViews: object[] = routesList.map((routes, index) => {
    const { paths, key } = routes;
    const route = (
      <Route
        key={`route-${index}`}
        path={paths}
        render={({ match, history }) => {
          const id = match.params.id;
          const matchingPage = props.state[key][id];
          return (
            <DynamicImports load={() => import('./PageView')}>
              {Component => {
                if (!props.state.loading) {
                  return !Component ? (
                    <Loading />
                  ) : (
                    <Component
                      match={match}
                      history={history}
                      category={key}
                      matchingPage={matchingPage}
                    />
                  );
                } else {
                  return <Loading />;
                }
              }}
            </DynamicImports>
          );
        }}
      />
    );
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
