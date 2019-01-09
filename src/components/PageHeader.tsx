import * as React from 'react';
import { connect } from 'react-redux';
import { addPage, changePage } from '../actions';
import '../styles/PageHeader.css';

interface ICharacterProps {
  category: string;
  state: { pageView: {} };
  history: any;
  match: { path: string };
  getPage: Function;
  changePage: Function;
}

interface ICharacterState {
  loading: boolean;
}
class PageHeader extends React.Component<ICharacterProps, ICharacterState> {
  state = {
    loading: false
  };

  public getPage = async (category, page) => {
    const { state, history, getPage, changePage } = this.props;
    if (!state[category][page]) {
      getPage(category, page);
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: !this.state.loading });

        history.push(`/${category}/${page}`);
      }, 600);
    } else {
      changePage(category, page);
      this.props.history.push(`/${category}/${page}`);
    }
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
