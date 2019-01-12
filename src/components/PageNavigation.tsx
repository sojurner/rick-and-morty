import * as React from 'react';
import { connect } from 'react-redux';
import { addPage, changePage } from '../actions';

import '../styles/PageNavigation.css';

interface IPageNavigationProps {
  category: string;
  state: { pageView: {}; pageCount: {} };
  history: any;
  match: string;
  getPage: Function;
  changePage: Function;
}

class PageNavigation extends React.Component<IPageNavigationProps, {}> {
  public getPage = async (category, page) => {
    const { state, history, getPage, changePage } = this.props;
    if (!state[category][page]) {
      await getPage(category, page);
    } else {
      changePage(category, page);
    }
    history.push(`/${category}/${page}`);
  };

  render() {
    const { state, match } = this.props;
    const { pageView, pageCount } = state;
    const category = match;

    return (
      <nav className="page-navigation">
        <i
          onClick={this.getPage.bind(null, category, pageView[category] - 1)}
          className="material-icons left-arrow"
        >
          keyboard_arrow_left
        </i>
        <div className="page-number-links">
          {Array.from({ length: pageCount[category] }, (v, k) => k + 1).map(
            num => {
              return (
                <span
                  onClick={this.getPage.bind(null, category, num)}
                  key={`page-${num}`}
                  className={
                    pageView[category] === num
                      ? 'page-number-active'
                      : 'page-number'
                  }
                >
                  {num}
                </span>
              );
            }
          )}
        </div>
        <i
          onClick={this.getPage.bind(null, category, pageView[category] + 1)}
          className="material-icons right-arrow"
        >
          keyboard_arrow_right
        </i>
      </nav>
    );
  }
}

export const mapStateToProps = state => ({
  state
});

export const mapDispatchToProps = dispatch => ({
  changePage: (category, page) => dispatch(changePage(category, page)),
  getPage: (str, page) => dispatch(addPage(str, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNavigation);
