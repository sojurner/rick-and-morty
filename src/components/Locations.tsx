import * as React from 'react';
import DynamicImports from './DynamicImports';

const Locations = props => {
  return (
    <DynamicImports load={() => import('./PageView')}>
      {Component => {
        return !Component ? <h1>Loading...</h1> : <Component {...props} />;
      }}
    </DynamicImports>
  );
};

export default Locations;
