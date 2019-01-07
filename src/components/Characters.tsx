import * as React from 'react';
import DynamicImports from './DynamicImports';

const Characters = props => {
  return (
    <div className="character-page">
      <h1 className="characters-title">Characters</h1>

      <DynamicImports load={() => import('./PageView')}>
        {Component => {
          return !Component ? <h1>Loading...</h1> : <Component {...props} />;
        }}
      </DynamicImports>
    </div>
  );
};

export default Characters;
