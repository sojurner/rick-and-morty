import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { fetchData } from '../actions';
import Navigation from './Navigation';
import Routes from './Routes';

import '../styles/App.css';

interface IAppProps {
  fetchData: Function;
}
class App extends React.Component<IAppProps, {}> {
  public componentDidMount = () => {
    const { fetchData } = this.props;
    fetchData();
  };

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

export const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: (str: string) => dispatch(fetchData(str))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
