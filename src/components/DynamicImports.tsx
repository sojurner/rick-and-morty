import * as React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

interface iDynamicImportsProps {
  load: Function;
  fetchData: Function;
  match: any;
  children: Function;
}

interface iDynamicImportsState {
  component: any;
}

class DynamicImports extends React.Component<
  iDynamicImportsProps,
  iDynamicImportsState
> {
  state = {
    component: null
  };

  public componentDidMount() {
    const { fetchData, load } = this.props;
    const { path } = this.props.match.match;
    load().then(mod =>
      this.setState(() => ({
        component: mod.default
      }))
    );
    fetchData(path.slice(1));
  }

  public render() {
    return this.props.children(this.state.component);
  }
}

export const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: (str: string) => dispatch(fetchData(str))
});

export default connect(
  null,
  mapDispatchToProps
)(DynamicImports);
