import * as React from 'react';

interface iDynamicImportsProps {
  load: Function;
  children: any;
}

interface iDynamicImportsState {
  component: any;
}

class DynamicImports extends React.Component<
  iDynamicImportsProps,
  iDynamicImportsState
> {
  public state = {
    component: null
  };

  public componentDidMount() {
    const { load } = this.props;
    load().then(mod => {
      this.setState(() => ({ component: mod.default }));
    });
  }

  public render() {
    return this.props.children(this.state.component);
  }
}

export default DynamicImports;
