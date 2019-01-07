import * as React from 'react';

interface IEpisodesProps {
  match: object;
}

interface IEpisodesState {}

class Episodes extends React.Component<IEpisodesProps, IEpisodesState> {
  state = {};

  public render() {
    console.log(this.props.match);
    return <h1>IMADE IT TO episodes</h1>;
  }
}

export default Episodes;
