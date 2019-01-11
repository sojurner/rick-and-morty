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
    const { pageView } = state;
    const category = match.path.slice(1);

    return (
      <div>
        <h1>{category}</h1>

        <button
          onClick={this.getPage.bind(null, category, pageView[category] - 1)}
        >
          {' '}
          prev{' '}
        </button>
        <button
          onClick={this.getPage.bind(null, category, pageView[category] + 1)}
        >
          next
        </button>
        {this.state.loading && (
          <div className="loading-gif">
            <img src="http://i.imgur.com/SaYmoW6.gif" />
          </div>
        )}
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
