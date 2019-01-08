import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContentCard from './ContentCard';

interface IPageViewProps {
  dispatch: Function;
  history: object;
  location: object;
  match: object;
  matchingPage: object;
  getPage: Function;
  pageCount: number;
}

interface IPageViewState {
  page: number;
}

class PageView extends React.Component<IPageViewProps, IPageViewState> {
  render() {
    const { matchingPage, category, pageView, pageCount } = this.props;
    return (
      <section>
        {matchingPage.map(item => {
          return <ContentCard item={item} type={category} />;
        })}
        <div />
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageView);
