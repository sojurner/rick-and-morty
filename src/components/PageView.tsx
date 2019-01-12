import * as React from 'react';
import '../styles/PageView.css';
import ContentCard from './ContentCard';
import PageNavigation from './PageNavigation';

interface IPageViewProps {
  dispatch: Function;
  history: object;
  location: object;
  match: { path: string };
  matchingPage: any[];
  getPage: Function;
  pageCount: number;
  category: string;
}

interface IPageViewState {
  opaque: boolean;
}

class PageView extends React.Component<IPageViewProps, IPageViewState> {
  state = {
    opaque: true
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ opaque: false });
    }, 200);
  };

  render() {
    const { matchingPage, category, match, history } = this.props;
    return (
      <section
        className={
          this.state.opaque
            ? 'content-container-hide'
            : 'content-container-show'
        }
      >
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
        <PageNavigation
          match={match.path.slice(1, match.path.lastIndexOf('/'))}
          history={history}
        />
      </section>
    );
  }
}

export default PageView;
