import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Routes from './Routes';

import '../styles/App.css';

class App extends React.Component<{}, {}> {
  public render() {
    const routes: string[] = ['characters', 'locations', 'episodes'];

    return (
      <Router>
        <div>
          <Navigation routes={routes} />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
