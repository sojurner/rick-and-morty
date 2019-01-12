import * as React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import PageNavigation from './PageNavigation';

import '../styles/PageHeader.css';

interface IPageHeaderProps {
  changePage: Function;
  match: { path: string };
  history: any;
}

class PageHeader extends React.Component<IPageHeaderProps, {}> {
  componentDidMount = () => {
    this.props.changePage('reset', 1);
  };

  public render() {
    const category = this.props.match.path.slice(1);

    return (
      <header>
        <h1 className="category-title">{category}</h1>
        <PageNavigation match={category} history={this.props.history} />
      </header>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  changePage: (category, page) => dispatch(changePage(category, page))
});

export default connect(
  null,
  mapDispatchToProps
)(PageHeader);
