import * as React from 'react';
import '../styles/PageView.css';
import ContentCard from './ContentCard';

interface IPageViewProps {
  dispatch: Function;
  history: object;
  location: object;
  match: object;
  matchingPage: any[];
  getPage: Function;
  pageCount: number;
  category: string;
}

interface IPageViewState {
  page: number;
}

class PageView extends React.Component<IPageViewProps, IPageViewState> {
  render() {
    const { matchingPage, category } = this.props;
    return (
      <section className="content-container">
        {matchingPage.map(item => {
          const { name } = item;
          switch (category) {
            case 'characters':
              const { image } = item;
              return <ContentCard item={{ name, image }} />;
            default:
              return <ContentCard item={{ name }} />;
          }
        })}
        <div />
      </section>
    );
  }
}

export default PageView;
