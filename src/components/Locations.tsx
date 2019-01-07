import * as React from 'react';

interface ILocationsProps {
  match: object;
}

interface ILocationsState {}

class Locations extends React.Component<ILocationsProps, ILocationsState> {
  state = {};

  public render() {
    console.log(this.props.match);
    return <h1>IMADE IT TO locations</h1>;
  }
}

export default Locations;
