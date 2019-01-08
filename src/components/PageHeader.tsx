import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPage } from '../actions';
import PageView from './PageView';

interface ICharacterProps {
  category: string;
  pageCount: object;
  pageView: object;
  history: any;
  match: { path: string };
  getPage: Function;
}

interface ICharacterState {
  page: number;
}
class PageHeader extends React.Component<ICharacterProps, ICharacterState> {
  state = {
    page: 1
  };

  public getPage = async (category, page) => {
    await this.props.getPage(category, page);
    setTimeout(() => {
      this.props.history.push(`/${category}/${page}`)
  }, 400);

  public render() {
    const { match, pageView, pageCount } = this.props;
    const category = this.props.match.path.slice(1);

    return (
      <div>
        <h1>peope</h1>

        <button
          onClick={this.getPage.bind(
            null,
            'characters',
            pageView[category] - 1
          )}
        >
          {' '}
          prev{' '}
        </button>
        <button
          onClick={this.getPage.bind(null, category, pageView[category] + 1)}
        >
          next
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  pageCount: state.pageCount,
  pageView: state.pageView
});

export const mapDispatchToProps = dispatch => ({
  getPage: (str, page) => dispatch(addPage(str, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
