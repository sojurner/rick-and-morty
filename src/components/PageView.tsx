import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContentCard from './ContentCard';

interface IPageViewProps {
  dispatch: Function;
  history: object;
  location: object;
  match: object;
  matchingPage: any[];
  getPage: Function;
  pageCount: number;
  category: string | null;
}

interface IPageViewState {
  page: number;
}

class PageView extends React.Component<IPageViewProps, IPageViewState> {
  render() {
    const { matchingPage, category } = this.props;
    return (
      <section>
        {matchingPage.map(item => {
          return <ContentCard item={item} category={category} />;
        })}
        <div />
      </section>
    );
  }
}

export default PageView;
