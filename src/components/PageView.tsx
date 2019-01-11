import * as React from 'react';

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
      <section>
        {matchingPage.map(item => {
          switch (category) {
            case 'characters':
              return (
                <div>
                  <h1>{item.name}</h1>
                  <img src={item.image} alt="Character image" />
                </div>
              );
            case 'locations':
              return <h1>{item.name}</h1>;
            case 'episodes':
              return <h1>{item.name}</h1>;
          }
        })}
        <div />
      </section>
    );
  }
}

export default PageView;
