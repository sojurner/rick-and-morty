import * as React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import { addPage, changePage } from '../actions';
import '../styles/PageHeader.css';

interface ICharacterProps {
  category: string;
  state: { pageView: {}; pageCount: {} };
  history: any;
  match: { path: string };
  getPage: Function;
  changePage: Function;
}

class PageHeader extends React.Component<ICharacterProps, {}> {
  componentDidMount = () => {
    this.props.changePage('reset', 1);
  };

  public getPage = async (category, page) => {
    const { state, history, getPage, changePage } = this.props;
    if (!state[category][page]) {
      await getPage(category, page);
    } else {
      changePage(category, page);
    }
    history.push(`/${category}/${page}`);
  };

  public render() {
    const { state, match } = this.props;
    const { pageView, pageCount } = state;
    const category = match.path.slice(1);

    return (
      <div>
        <h1 className="category-title">{category}</h1>
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
      </div>
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
)(PageHeader);
